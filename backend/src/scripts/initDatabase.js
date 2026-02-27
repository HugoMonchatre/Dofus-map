import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const initDatabase = async () => {
  try {
    console.log('📚 Initializing database...')

    // Lire le fichier SQL
    const schemaPath = path.join(__dirname, '../../database/schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')

    // Séparer les requêtes SQL
    const queries = schema
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0)

    // Exécuter chaque requête
    for (const query of queries) {
      try {
        await pool.query(query)
      } catch (error) {
        // Ignorer les erreurs de duplication (tables déjà existantes)
        if (!error.message.includes('already exists') &&
            !error.message.includes('Duplicate entry')) {
          console.error(`Error executing query: ${error.message}`)
        }
      }
    }

    console.log('✅ Database initialized successfully!')
    console.log('💡 You can now load sample data with: database/sample_data.sql')

    process.exit(0)
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message)
    process.exit(1)
  }
}

initDatabase()
