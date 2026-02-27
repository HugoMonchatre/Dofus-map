import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { testConnection } from './config/database.js'
import dungeonsRoutes from './routes/dungeons.js'
import compositionsRoutes from './routes/compositions.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/dungeons', dungeonsRoutes)
app.use('/api/compositions', compositionsRoutes)

// Route de test
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  })
})

// Démarrage du serveur
const startServer = async () => {
  try {
    // Test de connexion à la base de données
    const dbConnected = await testConnection()

    if (!dbConnected) {
      console.error('⚠️  Failed to connect to database. Please check your configuration.')
      process.exit(1)
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
      console.log(`📍 API available at http://localhost:${PORT}/api`)
      console.log(`🏥 Health check at http://localhost:${PORT}/api/health`)
    })
  } catch (error) {
    console.error('❌ Server startup failed:', error)
    process.exit(1)
  }
}

startServer()
