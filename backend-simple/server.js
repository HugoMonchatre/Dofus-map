import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Chemins des fichiers de données
const DUNGEONS_FILE = path.join(__dirname, 'data', 'dungeons.json')
const COMPOSITIONS_FILE = path.join(__dirname, 'data', 'compositions.json')

// Fonctions utilitaires pour lire/écrire les données
async function readDungeons() {
  const data = await fs.readFile(DUNGEONS_FILE, 'utf8')
  return JSON.parse(data)
}

async function readCompositions() {
  const data = await fs.readFile(COMPOSITIONS_FILE, 'utf8')
  return JSON.parse(data)
}

async function writeCompositions(compositions) {
  await fs.writeFile(COMPOSITIONS_FILE, JSON.stringify(compositions, null, 2))
}

// Routes - Donjons

app.get('/api/dungeons', async (req, res) => {
  try {
    const dungeons = await readDungeons()
    res.json({ success: true, data: dungeons })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get('/api/dungeons/:id', async (req, res) => {
  try {
    const dungeons = await readDungeons()
    const dungeon = dungeons.find(d => d.id === parseInt(req.params.id))

    if (!dungeon) {
      return res.status(404).json({ success: false, error: 'Dungeon not found' })
    }

    res.json({ success: true, data: dungeon })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// Routes - Compositions

app.get('/api/compositions/dungeon/:dungeonId', async (req, res) => {
  try {
    const dungeonId = parseInt(req.params.dungeonId)
    const partySize = req.query.partySize ? parseInt(req.query.partySize) : null

    const compositions = await readCompositions()
    const dungeons = await readDungeons()

    let filtered = compositions.filter(c => c.dungeon_id === dungeonId)

    if (partySize) {
      filtered = filtered.filter(c => c.party_size === partySize)
    }

    // Ajouter le nom du donjon
    const dungeon = dungeons.find(d => d.id === dungeonId)
    filtered = filtered.map(c => ({
      ...c,
      dungeon_name: dungeon ? dungeon.name : 'Unknown'
    }))

    res.json({ success: true, data: filtered })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get('/api/compositions/:id', async (req, res) => {
  try {
    const compositions = await readCompositions()
    const dungeons = await readDungeons()

    const composition = compositions.find(c => c.id === parseInt(req.params.id))

    if (!composition) {
      return res.status(404).json({ success: false, error: 'Composition not found' })
    }

    // Ajouter le nom du donjon
    const dungeon = dungeons.find(d => d.id === composition.dungeon_id)
    const result = {
      ...composition,
      dungeon_name: dungeon ? dungeon.name : 'Unknown'
    }

    res.json({ success: true, data: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.post('/api/compositions', async (req, res) => {
  try {
    const { dungeonId, partySize, title, description, details } = req.body

    if (!dungeonId || !partySize || !title) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: dungeonId, partySize, title'
      })
    }

    const compositions = await readCompositions()

    // Générer les nouveaux IDs
    const newId = Math.max(...compositions.map(c => c.id), 0) + 1
    let detailIdCounter = Math.max(
      ...compositions.flatMap(c => c.details.map(d => d.id)),
      0
    ) + 1

    const newComposition = {
      id: newId,
      dungeon_id: dungeonId,
      party_size: partySize,
      title,
      description: description || null,
      details: (details || []).map((detail, index) => ({
        id: detailIdCounter++,
        position: detail.position || index + 1,
        class_name: detail.className,
        role: detail.role || null,
        notes: detail.notes || null,
        equipment: detail.equipment ?
          (Array.isArray(detail.equipment) ? detail.equipment.map(e => e.name).join(', ') : detail.equipment)
          : null
      }))
    }

    compositions.push(newComposition)
    await writeCompositions(compositions)

    res.status(201).json({
      success: true,
      data: { id: newId, message: 'Composition created successfully' }
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.put('/api/compositions/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { partySize, title, description, details } = req.body

    const compositions = await readCompositions()
    const index = compositions.findIndex(c => c.id === id)

    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Composition not found' })
    }

    let detailIdCounter = Math.max(
      ...compositions.flatMap(c => c.details.map(d => d.id)),
      0
    ) + 1

    compositions[index] = {
      ...compositions[index],
      party_size: partySize,
      title,
      description: description || null,
      details: (details || []).map((detail, idx) => ({
        id: detailIdCounter++,
        position: detail.position || idx + 1,
        class_name: detail.className,
        role: detail.role || null,
        notes: detail.notes || null,
        equipment: detail.equipment ?
          (Array.isArray(detail.equipment) ? detail.equipment.map(e => e.name).join(', ') : detail.equipment)
          : null
      }))
    }

    await writeCompositions(compositions)

    res.json({
      success: true,
      data: { message: 'Composition updated successfully' }
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.delete('/api/compositions/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const compositions = await readCompositions()

    const filtered = compositions.filter(c => c.id !== id)

    if (filtered.length === compositions.length) {
      return res.status(404).json({ success: false, error: 'Composition not found' })
    }

    await writeCompositions(filtered)

    res.json({
      success: true,
      data: { message: 'Composition deleted successfully' }
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' })
})

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📍 API available at http://localhost:${PORT}/api`)
  console.log(`🏥 Health check at http://localhost:${PORT}/api/health`)
})
