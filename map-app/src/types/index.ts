export interface Coordinates {
  x: number
  y: number
}

export interface CanvasCoordinates {
  x: number
  y: number
}

export interface Dungeon {
  id?: number
  name: string
  level: number
  coord: Coordinates
  mapId?: string // 'main' par défaut, ou 'incarnam', 'enutrosor', etc.
}
