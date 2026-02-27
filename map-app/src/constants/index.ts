import type { Dungeon } from '../types'

export interface LevelRange {
  label: string
  min: number
  max: number
}

export const LEVEL_RANGES: LevelRange[] = [
  { label: 'Niveau 1 - 50', min: 1, max: 50 },
  { label: 'Niveau 51 - 100', min: 51, max: 100 },
  { label: 'Niveau 101 - 150', min: 101, max: 150 },
  { label: 'Niveau 151 - 190', min: 151, max: 190 },
  { label: 'Niveau 191 - 200', min: 191, max: 200 },
]

export const WORLD_BOUNDS = {
  minX: -94,
  maxX: 50,
  minY: -100,
  maxY: 61,
}

export const GRID_COLS = 143
export const GRID_ROWS = 160
export const COORD_STEP = 10
export const ZOOM_FACTOR = 0.2
export const MIN_ZOOM = 1
export const MAX_ZOOM = 5

export const CANVAS_WIDTH = 1200
export const CANVAS_HEIGHT = 1000

export const DUNGEON_ICON_SIZE = 1.5 // Taille de l'icône en cellules de grille

export const DUNGEONS: Dungeon[] = [
  { id: 1, name: 'Antre de la Reine Nyée', level: 90, coord: { x: -6, y: -15 } },
  { id: 2, name: 'Cimetière des Mastodontes', level: 80, coord: { x: 19, y: -61 } },
  { id: 3, name: 'Akadémie des Gobs', level: 40, coord: { x: -5, y: 3 } },
]
