import pool from '../config/database.js'

export class Composition {
  // Récupérer toutes les compositions pour un donjon spécifique
  static async getByDungeon(dungeonId, partySize = null) {
    try {
      let query = `
        SELECT c.*, d.name as dungeon_name
        FROM compositions c
        JOIN dungeons d ON c.dungeon_id = d.id
        WHERE c.dungeon_id = ?
      `
      const params = [dungeonId]

      if (partySize) {
        query += ' AND c.party_size = ?'
        params.push(partySize)
      }

      query += ' ORDER BY c.party_size, c.created_at DESC'

      const [rows] = await pool.execute(query, params)
      return rows
    } catch (error) {
      throw new Error(`Error fetching compositions: ${error.message}`)
    }
  }

  // Récupérer une composition complète avec ses détails
  static async getById(id) {
    try {
      const [compositions] = await pool.execute(
        `SELECT c.*, d.name as dungeon_name
         FROM compositions c
         JOIN dungeons d ON c.dungeon_id = d.id
         WHERE c.id = ?`,
        [id]
      )

      if (compositions.length === 0) {
        return null
      }

      const composition = compositions[0]

      // Récupérer les détails (classes)
      const [details] = await pool.execute(
        `SELECT cd.*, GROUP_CONCAT(ce.equipment_name) as equipment
         FROM composition_details cd
         LEFT JOIN composition_equipment ce ON cd.id = ce.composition_detail_id
         WHERE cd.composition_id = ?
         GROUP BY cd.id
         ORDER BY cd.position`,
        [id]
      )

      composition.details = details
      return composition
    } catch (error) {
      throw new Error(`Error fetching composition: ${error.message}`)
    }
  }

  // Créer une nouvelle composition
  static async create(compositionData) {
    const connection = await pool.getConnection()
    try {
      await connection.beginTransaction()

      const [result] = await connection.execute(
        `INSERT INTO compositions (dungeon_id, party_size, title, description)
         VALUES (?, ?, ?, ?)`,
        [
          compositionData.dungeonId,
          compositionData.partySize,
          compositionData.title,
          compositionData.description || null
        ]
      )

      const compositionId = result.insertId

      // Ajouter les détails si fournis
      if (compositionData.details && compositionData.details.length > 0) {
        for (const detail of compositionData.details) {
          const [detailResult] = await connection.execute(
            `INSERT INTO composition_details (composition_id, position, class_name, role, notes)
             VALUES (?, ?, ?, ?, ?)`,
            [
              compositionId,
              detail.position,
              detail.className,
              detail.role || null,
              detail.notes || null
            ]
          )

          // Ajouter les équipements si fournis
          if (detail.equipment && detail.equipment.length > 0) {
            for (const equip of detail.equipment) {
              await connection.execute(
                `INSERT INTO composition_equipment (composition_detail_id, equipment_name, equipment_type, is_required)
                 VALUES (?, ?, ?, ?)`,
                [
                  detailResult.insertId,
                  equip.name,
                  equip.type || null,
                  equip.required || false
                ]
              )
            }
          }
        }
      }

      await connection.commit()
      return compositionId
    } catch (error) {
      await connection.rollback()
      throw new Error(`Error creating composition: ${error.message}`)
    } finally {
      connection.release()
    }
  }

  // Mettre à jour une composition
  static async update(id, compositionData) {
    const connection = await pool.getConnection()
    try {
      await connection.beginTransaction()

      await connection.execute(
        `UPDATE compositions
         SET party_size = ?, title = ?, description = ?
         WHERE id = ?`,
        [
          compositionData.partySize,
          compositionData.title,
          compositionData.description || null,
          id
        ]
      )

      // Supprimer les anciens détails
      await connection.execute('DELETE FROM composition_details WHERE composition_id = ?', [id])

      // Ajouter les nouveaux détails
      if (compositionData.details && compositionData.details.length > 0) {
        for (const detail of compositionData.details) {
          const [detailResult] = await connection.execute(
            `INSERT INTO composition_details (composition_id, position, class_name, role, notes)
             VALUES (?, ?, ?, ?, ?)`,
            [
              id,
              detail.position,
              detail.className,
              detail.role || null,
              detail.notes || null
            ]
          )

          if (detail.equipment && detail.equipment.length > 0) {
            for (const equip of detail.equipment) {
              await connection.execute(
                `INSERT INTO composition_equipment (composition_detail_id, equipment_name, equipment_type, is_required)
                 VALUES (?, ?, ?, ?)`,
                [
                  detailResult.insertId,
                  equip.name,
                  equip.type || null,
                  equip.required || false
                ]
              )
            }
          }
        }
      }

      await connection.commit()
      return true
    } catch (error) {
      await connection.rollback()
      throw new Error(`Error updating composition: ${error.message}`)
    } finally {
      connection.release()
    }
  }

  // Supprimer une composition
  static async delete(id) {
    try {
      const [result] = await pool.execute('DELETE FROM compositions WHERE id = ?', [id])
      return result.affectedRows > 0
    } catch (error) {
      throw new Error(`Error deleting composition: ${error.message}`)
    }
  }
}
