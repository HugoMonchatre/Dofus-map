import type { Coordinates, CanvasCoordinates, Dungeon } from '../types'

// Marge de sécurité contre les erreurs d'arrondi flottant (ex: 6.999999999999999 au lieu de 7)
const GRID_EPSILON = 1e-9

interface WorldBounds {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

export const worldToCanvas = (
  worldCoords: Coordinates,
  canvasWidth: number,
  canvasHeight: number,
  worldBounds: WorldBounds
): CanvasCoordinates => {
  const x =
    ((worldCoords.x - worldBounds.minX) / (worldBounds.maxX - worldBounds.minX)) * canvasWidth
  const y =
    ((worldCoords.y - worldBounds.minY) / (worldBounds.maxY - worldBounds.minY)) * canvasHeight
  return { x, y }
}

export const canvasToWorld = (
  canvasCoords: CanvasCoordinates,
  canvasWidth: number,
  canvasHeight: number,
  worldBounds: WorldBounds,
  gridCols?: number,
  gridRows?: number,
  gridOffsetX: number = 0,
  gridOffsetY: number = 0
): Coordinates => {
  const cols = gridCols ?? (worldBounds.maxX - worldBounds.minX)
  const rows = gridRows ?? (worldBounds.maxY - worldBounds.minY)
  const stepX = canvasWidth / cols
  const stepY = canvasHeight / rows
  const offsetX = gridOffsetX * stepX
  const offsetY = gridOffsetY * stepY
  // Un décalage fractionnaire (0 < offset < 1) fait toujours atterrir une coordonnée entière
  // dans la case juste avant la sienne (floor(n - offset) = n - 1). On compense ici pour que
  // les coordonnées affichées/comparées aux données restent dans leur numérotation naturelle.
  const compensationX = gridOffsetX > 0 ? 1 : 0
  const compensationY = gridOffsetY > 0 ? 1 : 0
  const cellX = Math.floor((canvasCoords.x - offsetX) / stepX + GRID_EPSILON) + compensationX
  const cellY = Math.floor((canvasCoords.y - offsetY) / stepY + GRID_EPSILON) + compensationY
  return { x: cellX + worldBounds.minX, y: cellY + worldBounds.minY }
}

export const findDungeonAt = (
  imageX: number,
  imageY: number,
  imgW: number,
  imgH: number,
  dungeons: Dungeon[],
  dungeonIconSize: number = 1,
  gridCols: number = 143,
  gridRows: number = 160,
  worldBounds: WorldBounds = { minX: -94, maxX: 50, minY: -100, maxY: 61 },
  gridOffsetX: number = 0,
  gridOffsetY: number = 0
): Dungeon | undefined => {
  const gridStepX = imgW / gridCols
  const gridStepY = imgH / gridRows
  const offsetX = gridOffsetX * gridStepX
  const offsetY = gridOffsetY * gridStepY

  return dungeons.find((dungeon) => {
    const imageCoord = worldToCanvas(dungeon.coord, imgW, imgH, worldBounds)
    const cellX = Math.floor((imageCoord.x - offsetX) / gridStepX + GRID_EPSILON) * gridStepX + offsetX
    const cellY = Math.floor((imageCoord.y - offsetY) / gridStepY + GRID_EPSILON) * gridStepY + offsetY
    const iconWidth = gridStepX * dungeonIconSize
    const iconHeight = gridStepY * dungeonIconSize

    // Centrer l'icône sur la case
    const iconOffsetX = gridStepX * (dungeonIconSize - 1) / 2
    const iconOffsetY = gridStepY * (dungeonIconSize - 1) / 2
    const centeredCellX = cellX - iconOffsetX
    const centeredCellY = cellY - iconOffsetY

    return (
      imageX >= centeredCellX &&
      imageX < centeredCellX + iconWidth &&
      imageY >= centeredCellY &&
      imageY < centeredCellY + iconHeight
    )
  })
}
