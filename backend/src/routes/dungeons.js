import express from 'express'
import { Dungeon } from '../models/Dungeon.js'

const router = express.Router()

// GET /api/dungeons
// Récupérer tous les donjons
router.get('/', async (req, res) => {
  try {
    const dungeons = await Dungeon.getAll()
    res.json({
      success: true,
      data: dungeons
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// GET /api/dungeons/:id
// Récupérer un donjon par ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const dungeon = await Dungeon.getById(parseInt(id))

    if (!dungeon) {
      return res.status(404).json({
        success: false,
        error: 'Dungeon not found'
      })
    }

    res.json({
      success: true,
      data: dungeon
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// POST /api/dungeons
// Créer un nouveau donjon
router.post('/', async (req, res) => {
  try {
    const dungeonData = req.body

    if (!dungeonData.name || !dungeonData.level || !dungeonData.coord) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, level, coord'
      })
    }

    const dungeonId = await Dungeon.create(dungeonData)

    res.status(201).json({
      success: true,
      data: {
        id: dungeonId,
        message: 'Dungeon created successfully'
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// PUT /api/dungeons/:id
// Mettre à jour un donjon
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const dungeonData = req.body

    const updated = await Dungeon.update(parseInt(id), dungeonData)

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Dungeon not found'
      })
    }

    res.json({
      success: true,
      data: {
        message: 'Dungeon updated successfully'
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// DELETE /api/dungeons/:id
// Supprimer un donjon
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Dungeon.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Dungeon not found'
      })
    }

    res.json({
      success: true,
      data: {
        message: 'Dungeon deleted successfully'
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

export default router
