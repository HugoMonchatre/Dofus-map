import type { Coordinates, CanvasCoordinates, Dungeon } from '../types'
import { WORLD_BOUNDS, GRID_COLS, GRID_ROWS } from '../constants'

export const worldToCanvas = (
  worldCoords: Coordinates,
  canvasWidth: number,
  canvasHeight: number
): CanvasCoordinates => {
  const x =
    ((worldCoords.x - WORLD_BOUNDS.minX) / (WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX)) * canvasWidth
  const y =
    ((worldCoords.y - WORLD_BOUNDS.minY) / (WORLD_BOUNDS.maxY - WORLD_BOUNDS.minY)) * canvasHeight
  return { x, y }
}

export const canvasToWorld = (
  canvasCoords: CanvasCoordinates,
  canvasWidth: number,
  canvasHeight: number
): Coordinates => {
  const x =
    (canvasCoords.x / canvasWidth) * (WORLD_BOUNDS.maxX - WORLD_BOUNDS.minX) + WORLD_BOUNDS.minX
  const y =
    (canvasCoords.y / canvasHeight) * (WORLD_BOUNDS.maxY - WORLD_BOUNDS.minY) + WORLD_BOUNDS.minY
  return { x: Math.round(x), y: Math.round(y) }
}

export const findDungeonAt = (
  imageX: number,
  imageY: number,
  imgW: number,
  imgH: number,
  dungeons: Dungeon[],
  dungeonIconSize: number = 1
): Dungeon | undefined => {
  const gridStepX = imgW / GRID_COLS
  const gridStepY = imgH / GRID_ROWS

  return dungeons.find((dungeon) => {
    const imageCoord = worldToCanvas(dungeon.coord, imgW, imgH)
    const cellX = Math.floor(imageCoord.x / gridStepX) * gridStepX
    const cellY = Math.floor(imageCoord.y / gridStepY) * gridStepY
    const iconWidth = gridStepX * dungeonIconSize
    const iconHeight = gridStepY * dungeonIconSize

    // Centrer l'icône sur la case
    const offsetX = gridStepX * (dungeonIconSize - 1) / 2
    const offsetY = gridStepY * (dungeonIconSize - 1) / 2
    const centeredCellX = cellX - offsetX
    const centeredCellY = cellY - offsetY

    return (
      imageX >= centeredCellX &&
      imageX < centeredCellX + iconWidth &&
      imageY >= centeredCellY &&
      imageY < centeredCellY + iconHeight
    )
  })
}
