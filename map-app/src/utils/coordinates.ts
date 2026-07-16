import type { Coordinates, CanvasCoordinates, Dungeon } from '../types'

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
  worldBounds: WorldBounds
): Coordinates => {
  const x =
    (canvasCoords.x / canvasWidth) * (worldBounds.maxX - worldBounds.minX) + worldBounds.minX
  const y =
    (canvasCoords.y / canvasHeight) * (worldBounds.maxY - worldBounds.minY) + worldBounds.minY
  return { x: Math.round(x), y: Math.round(y) }
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
  worldBounds: WorldBounds = { minX: -94, maxX: 50, minY: -100, maxY: 61 }
): Dungeon | undefined => {
  const gridStepX = imgW / gridCols
  const gridStepY = imgH / gridRows

  return dungeons.find((dungeon) => {
    const imageCoord = worldToCanvas(dungeon.coord, imgW, imgH, worldBounds)
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
