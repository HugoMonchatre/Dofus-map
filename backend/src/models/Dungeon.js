import pool from '../config/database.js'

export class Dungeon {
  // Récupérer tous les donjons
  static async getAll() {
    try {
      const [rows] = await pool.execute(
        'SELECT id, name, level, coord_x, coord_y FROM dungeons ORDER BY level'
      )
      return rows.map(row => ({
        id: row.id,
        name: row.name,
        level: row.level,
        coord: { x: row.coord_x, y: row.coord_y }
      }))
    } catch (error) {
      throw new Error(`Error fetching dungeons: ${error.message}`)
    }
  }

  // Récupérer un donjon par ID
  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        'SELECT id, name, level, coord_x, coord_y FROM dungeons WHERE id = ?',
        [id]
      )

      if (rows.length === 0) {
        return null
      }

      const row = rows[0]
      return {
        id: row.id,
        name: row.name,
        level: row.level,
        coord: { x: row.coord_x, y: row.coord_y }
      }
    } catch (error) {
      throw new Error(`Error fetching dungeon: ${error.message}`)
    }
  }

  // Créer un nouveau donjon
  static async create(dungeonData) {
    try {
      const [result] = await pool.execute(
        'INSERT INTO dungeons (name, level, coord_x, coord_y) VALUES (?, ?, ?, ?)',
        [dungeonData.name, dungeonData.level, dungeonData.coord.x, dungeonData.coord.y]
      )
      return result.insertId
    } catch (error) {
      throw new Error(`Error creating dungeon: ${error.message}`)
    }
  }

  // Mettre à jour un donjon
  static async update(id, dungeonData) {
    try {
      const [result] = await pool.execute(
        'UPDATE dungeons SET name = ?, level = ?, coord_x = ?, coord_y = ? WHERE id = ?',
        [dungeonData.name, dungeonData.level, dungeonData.coord.x, dungeonData.coord.y, id]
      )
      return result.affectedRows > 0
    } catch (error) {
      throw new Error(`Error updating dungeon: ${error.message}`)
    }
  }

  // Supprimer un donjon
  static async delete(id) {
    try {
      const [result] = await pool.execute('DELETE FROM dungeons WHERE id = ?', [id])
      return result.affectedRows > 0
    } catch (error) {
      throw new Error(`Error deleting dungeon: ${error.message}`)
    }
  }
}
