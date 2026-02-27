import express from 'express'
import { Composition } from '../models/Composition.js'

const router = express.Router()

// GET /api/compositions/dungeon/:dungeonId?partySize=X
// Récupérer toutes les compositions pour un donjon (optionnellement filtré par taille de groupe)
router.get('/dungeon/:dungeonId', async (req, res) => {
  try {
    const { dungeonId } = req.params
    const { partySize } = req.query

    const compositions = await Composition.getByDungeon(
      parseInt(dungeonId),
      partySize ? parseInt(partySize) : null
    )

    res.json({
      success: true,
      data: compositions
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// GET /api/compositions/:id
// Récupérer une composition complète avec tous ses détails
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const composition = await Composition.getById(parseInt(id))

    if (!composition) {
      return res.status(404).json({
        success: false,
        error: 'Composition not found'
      })
    }

    res.json({
      success: true,
      data: composition
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// POST /api/compositions
// Créer une nouvelle composition
router.post('/', async (req, res) => {
  try {
    const compositionData = req.body

    // Validation basique
    if (!compositionData.dungeonId || !compositionData.partySize || !compositionData.title) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: dungeonId, partySize, title'
      })
    }

    const compositionId = await Composition.create(compositionData)

    res.status(201).json({
      success: true,
      data: {
        id: compositionId,
        message: 'Composition created successfully'
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// PUT /api/compositions/:id
// Mettre à jour une composition
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const compositionData = req.body

    const updated = await Composition.update(parseInt(id), compositionData)

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: 'Composition not found'
      })
    }

    res.json({
      success: true,
      data: {
        message: 'Composition updated successfully'
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// DELETE /api/compositions/:id
// Supprimer une composition
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Composition.delete(parseInt(id))

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Composition not found'
      })
    }

    res.json({
      success: true,
      data: {
        message: 'Composition deleted successfully'
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
