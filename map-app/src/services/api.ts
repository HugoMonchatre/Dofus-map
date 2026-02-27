const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export interface CompositionDetail {
  id: number
  position: number
  class_name: string
  role: string | null
  notes: string | null
  equipment: string | null
}

export interface Composition {
  id: number
  dungeon_id: number
  party_size: number
  title: string
  description: string | null
  dungeon_name: string
  created_at: string
  youtube_url?: string | null
  details?: CompositionDetail[]
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

class ApiService {
  // Récupérer toutes les compositions pour un donjon
  async getCompositionsByDungeon(
    dungeonId: number,
    partySize?: number
  ): Promise<Composition[]> {
    try {
      const url = partySize
        ? `${API_BASE_URL}/compositions/dungeon/${dungeonId}?partySize=${partySize}`
        : `${API_BASE_URL}/compositions/dungeon/${dungeonId}`

      const response = await fetch(url)
      const result: ApiResponse<Composition[]> = await response.json()

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch compositions')
      }

      return result.data
    } catch {
      return []
    }
  }

  // Récupérer une composition complète avec tous ses détails
  async getCompositionById(id: number): Promise<Composition | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/compositions/${id}`)
      const result: ApiResponse<Composition> = await response.json()

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch composition')
      }

      return result.data
    } catch {
      return null
    }
  }

  // Créer une nouvelle composition
  async createComposition(compositionData: {
    dungeonId: number
    partySize: number
    title: string
    description?: string
    details?: {
      position: number
      className: string
      role?: string
      notes?: string
      equipment?: { name: string; type?: string; required?: boolean }[]
    }[]
  }): Promise<number | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/compositions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(compositionData)
      })

      const result: ApiResponse<{ id: number; message: string }> = await response.json()

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to create composition')
      }

      return result.data.id
    } catch {
      return null
    }
  }

  // Supprimer une composition
  async deleteComposition(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/compositions/${id}`, {
        method: 'DELETE'
      })

      const result: ApiResponse<{ message: string }> = await response.json()
      return result.success
    } catch {
      return false
    }
  }
}

export const apiService = new ApiService()
