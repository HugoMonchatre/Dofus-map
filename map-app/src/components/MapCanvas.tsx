import { useRef, useEffect, useState, type FC } from 'react'
import type { Coordinates, CanvasCoordinates, Dungeon } from '../types'
import { worldToCanvas, canvasToWorld, findDungeonAt } from '../utils/coordinates'
import {
  WORLD_BOUNDS,
  GRID_COLS,
  GRID_ROWS,
  COORD_STEP,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  DUNGEON_ICON_SIZE,
} from '../constants'

interface MapCanvasProps {
  onDungeonClick: (dungeon: Dungeon) => void
  selectedDungeon: Dungeon | null
  onDungeonDeselect: () => void
  filteredDungeons: Dungeon[]
}

export const MapCanvas: FC<MapCanvasProps> = ({
  onDungeonClick,
  selectedDungeon,
  onDungeonDeselect,
  filteredDungeons,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [dungeonImage, setDungeonImage] = useState<HTMLImageElement | null>(null)

  const [isMouseDown, setIsMouseDown] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const [mouseWorld, setMouseWorld] = useState<Coordinates | null>(null)
  const [mouseImage, setMouseImage] = useState<CanvasCoordinates | null>(null)

  const [cameraX, setCameraX] = useState(0)
  const [cameraY, setCameraY] = useState(0)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const img = new Image()
    img.src = '/mapBG.png'
    img.onload = () => setImage(img)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.src = '/Djdofus.png'
    img.onload = () => setDungeonImage(img)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const imgW = image.width
    const imgH = image.height
    const sourceWidth = imgW / zoom
    const sourceHeight = imgH / zoom
    const maxCameraX = Math.max(0, imgW - sourceWidth)
    const maxCameraY = Math.max(0, imgH - sourceHeight)

    setCameraX((prev) => Math.max(0, Math.min(maxCameraX, prev)))
    setCameraY((prev) => Math.max(0, Math.min(maxCameraY, prev)))
  }, [zoom, image])

  // Centrer la caméra et zoomer sur le donjon sélectionné
  useEffect(() => {
    if (!selectedDungeon || !image) return

    const imgW = image.width
    const imgH = image.height
    const targetZoom = 3 // Niveau de zoom quand un donjon est sélectionné

    // Appliquer le zoom
    setZoom(targetZoom)

    const sourceWidth = imgW / targetZoom
    const sourceHeight = imgH / targetZoom

    const imageCoord = worldToCanvas(selectedDungeon.coord, imgW, imgH)

    // Centrer la caméra sur le donjon
    const targetCameraX = imageCoord.x - sourceWidth / 2
    const targetCameraY = imageCoord.y - sourceHeight / 2

    const maxCameraX = Math.max(0, imgW - sourceWidth)
    const maxCameraY = Math.max(0, imgH - sourceHeight)

    setCameraX(Math.max(0, Math.min(maxCameraX, targetCameraX)))
    setCameraY(Math.max(0, Math.min(maxCameraY, targetCameraY)))
  }, [selectedDungeon, image])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, width, height)

    const imgW = image.width
    const imgH = image.height

    const sourceX = cameraX
    const sourceY = cameraY
    const sourceWidth = imgW / zoom
    const sourceHeight = imgH / zoom
    ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height)

    const scaleX = width / sourceWidth
    const scaleY = height / sourceHeight

    const gridStepX = imgW / GRID_COLS
    const gridStepY = imgH / GRID_ROWS

    ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)'
    ctx.lineWidth = 1

    for (let x = 0; x <= imgW; x += gridStepX) {
      const screenX = (x - cameraX) * scaleX
      if (screenX < 0 || screenX > width) continue
      ctx.beginPath()
      ctx.moveTo(screenX, 0)
      ctx.lineTo(screenX, height)
      ctx.stroke()
    }

    for (let y = 0; y <= imgH; y += gridStepY) {
      const screenY = (y - cameraY) * scaleY
      if (screenY < 0 || screenY > height) continue
      ctx.beginPath()
      ctx.moveTo(0, screenY)
      ctx.lineTo(width, screenY)
      ctx.stroke()
    }

    filteredDungeons.forEach((dungeon) => {
      const imageCoord = worldToCanvas(dungeon.coord, imgW, imgH)
      const cellX = Math.floor(imageCoord.x / gridStepX) * gridStepX
      const cellY = Math.floor(imageCoord.y / gridStepY) * gridStepY

      const iconWidth = gridStepX * DUNGEON_ICON_SIZE
      const iconHeight = gridStepY * DUNGEON_ICON_SIZE

      // Centrer l'icône sur la case
      const offsetX = (gridStepX * (DUNGEON_ICON_SIZE - 1)) / 2
      const offsetY = (gridStepY * (DUNGEON_ICON_SIZE - 1)) / 2
      const centeredCellX = cellX - offsetX
      const centeredCellY = cellY - offsetY

      const screenX = (centeredCellX - cameraX) * scaleX
      const screenY = (centeredCellY - cameraY) * scaleY
      const cellW = iconWidth * scaleX
      const cellH = iconHeight * scaleY

      if (screenX + cellW < 0 || screenX > width || screenY + cellH < 0 || screenY > height) return

      const isSelected = selectedDungeon?.name === dungeon.name

      // Mettre en évidence le donjon sélectionné
      if (isSelected) {
        ctx.strokeStyle = '#ffcc00'
        ctx.lineWidth = 4
        ctx.strokeRect(screenX - 4, screenY - 4, cellW + 8, cellH + 8)
      }

      if (dungeonImage) {
        ctx.drawImage(
          dungeonImage,
          0,
          0,
          dungeonImage.width,
          dungeonImage.height,
          screenX,
          screenY,
          cellW,
          cellH
        )
      }

      const isHovered =
        mouseImage &&
        mouseImage.x >= centeredCellX &&
        mouseImage.x < centeredCellX + iconWidth &&
        mouseImage.y >= centeredCellY &&
        mouseImage.y < centeredCellY + iconHeight

      if (isHovered) {
        const label = `${dungeon.name} Niv. ${dungeon.level}`
        ctx.font = `${14 * scaleX}px sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        const labelX = screenX + cellW / 2
        const labelY = screenY - 4
        const metrics = ctx.measureText(label)
        const paddingX = 8 * scaleX
        const paddingY = 6 * scaleY

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        ctx.fillRect(
          labelX - metrics.width / 2 - paddingX,
          labelY - metrics.actualBoundingBoxAscent - paddingY,
          metrics.width + paddingX * 2,
          metrics.actualBoundingBoxAscent + paddingY * 2
        )
        ctx.fillStyle = '#ffffff'
        ctx.fillText(label, labelX, labelY)
      }
    })

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.font = `${12 * scaleX}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (let x = WORLD_BOUNDS.minX; x <= WORLD_BOUNDS.maxX; x += COORD_STEP) {
      const imageX = worldToCanvas({ x, y: WORLD_BOUNDS.minY }, imgW, imgH).x
      const canvasX = (imageX - cameraX) * scaleX
      if (canvasX < -50 || canvasX > width + 50) continue
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillText(x.toString(), canvasX, 15 * scaleY)
    }

    ctx.textAlign = 'right'
    for (let y = WORLD_BOUNDS.minY; y <= WORLD_BOUNDS.maxY; y += COORD_STEP) {
      const imageY = worldToCanvas({ x: WORLD_BOUNDS.minX, y }, imgW, imgH).y
      const canvasY = (imageY - cameraY) * scaleY
      if (canvasY < -50 || canvasY > height + 50) continue
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillText(y.toString(), 30 * scaleX, canvasY)
    }

    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)'
    const corners: Coordinates[] = [
      { x: WORLD_BOUNDS.minX, y: WORLD_BOUNDS.minY },
      { x: WORLD_BOUNDS.maxX, y: WORLD_BOUNDS.minY },
      { x: WORLD_BOUNDS.minX, y: WORLD_BOUNDS.maxY },
      { x: WORLD_BOUNDS.maxX, y: WORLD_BOUNDS.maxY },
    ]

    corners.forEach((corner) => {
      const imageCoord = worldToCanvas(corner, imgW, imgH)
      const canvasCoord = {
        x: (imageCoord.x - cameraX) * scaleX,
        y: (imageCoord.y - cameraY) * scaleY,
      }
      ctx.beginPath()
      ctx.arc(canvasCoord.x, canvasCoord.y, 5 * scaleX, 0, Math.PI * 2)
      ctx.fill()
    })

    if (mouseImage) {
      const cellX = Math.floor(mouseImage.x / gridStepX) * gridStepX
      const cellY = Math.floor(mouseImage.y / gridStepY) * gridStepY
      const screenX = (cellX - cameraX) * scaleX
      const screenY = (cellY - cameraY) * scaleY
      const cellW = gridStepX * scaleX
      const cellH = gridStepY * scaleY

      if (screenX + cellW >= 0 && screenX <= width && screenY + cellH >= 0 && screenY <= height) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
        ctx.lineWidth = 2
        ctx.strokeRect(screenX, screenY, cellW, cellH)
      }
    }

    if (mouseWorld) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
      ctx.fillRect(10, 10, 160, 28)
      ctx.fillStyle = '#ffffff'
      ctx.font = '14px monospace'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.fillText(`[${mouseWorld.x}, ${mouseWorld.y}]`, 18, 24)
    }
  }, [
    image,
    dungeonImage,
    cameraX,
    cameraY,
    zoom,
    mouseImage,
    mouseWorld,
    filteredDungeons,
    selectedDungeon,
  ])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsMouseDown(true)
    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const width = canvas.width
    const height = canvas.height
    const imgW = image.width
    const imgH = image.height
    const sourceWidth = imgW / zoom
    const sourceHeight = imgH / zoom
    const scaleX = width / sourceWidth
    const scaleY = height / sourceHeight

    const imageX = cameraX + mouseX / scaleX
    const imageY = cameraY + mouseY / scaleY
    setMouseWorld(canvasToWorld({ x: imageX, y: imageY }, imgW, imgH))
    setMouseImage({ x: imageX, y: imageY })

    if (!isMouseDown || zoom === 1) return

    const deltaX = e.clientX - lastMousePos.x
    const deltaY = e.clientY - lastMousePos.y

    const maxCameraX = Math.max(0, imgW - sourceWidth)
    const maxCameraY = Math.max(0, imgH - sourceHeight)

    setCameraX((prev) => Math.max(0, Math.min(maxCameraX, prev - deltaX / scaleX)))
    setCameraY((prev) => Math.max(0, Math.min(maxCameraY, prev - deltaY / scaleY)))

    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
    setMouseWorld(null)
    setMouseImage(null)
  }

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || !image) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const width = canvas.width
    const height = canvas.height
    const imgW = image.width
    const imgH = image.height
    const sourceWidth = imgW / zoom
    const sourceHeight = imgH / zoom
    const scaleX = width / sourceWidth
    const scaleY = height / sourceHeight

    const imageX = cameraX + mouseX / scaleX
    const imageY = cameraY + mouseY / scaleY

    const dungeon = findDungeonAt(imageX, imageY, imgW, imgH, filteredDungeons, DUNGEON_ICON_SIZE)
    if (dungeon) {
      onDungeonClick(dungeon)
    } else {
      // Désélectionner si on clique en dehors d'un donjon
      onDungeonDeselect()
    }
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()

    const canvas = canvasRef.current
    if (!canvas || !image) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const width = canvas.width
    const height = canvas.height
    const imgW = image.width
    const imgH = image.height
    const sourceWidth = imgW / zoom
    const sourceHeight = imgH / zoom
    const scaleX = width / sourceWidth
    const scaleY = height / sourceHeight

    const imageX = cameraX + mouseX / scaleX
    const imageY = cameraY + mouseY / scaleY

    const zoomFactor = 0.2
    const direction = e.deltaY > 0 ? -1 : 1
    const newZoom = Math.max(1, Math.min(5, zoom + direction * zoomFactor))

    const newSourceWidth = imgW / newZoom
    const newSourceHeight = imgH / newZoom
    const newScaleX = width / newSourceWidth
    const newScaleY = height / newSourceHeight

    let newCameraX = imageX - mouseX / newScaleX
    let newCameraY = imageY - mouseY / newScaleY

    const maxCameraX = Math.max(0, imgW - newSourceWidth)
    const maxCameraY = Math.max(0, imgH - newSourceHeight)

    newCameraX = Math.max(0, Math.min(maxCameraX, newCameraX))
    newCameraY = Math.max(0, Math.min(maxCameraY, newCameraY))

    setZoom(newZoom)
    setCameraX(newCameraX)
    setCameraY(newCameraY)
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onClick={handleCanvasClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        style={{
          border: '2px solid #333',
          cursor: isMouseDown ? 'grabbing' : 'grab',
          display: 'block',
          backgroundColor: '#f0f0f0',
        }}
      />
      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        Cliquez et glissez pour vous déplacer | Molette pour zoomer | Les cercles rouges indiquent
        les coins de référence
      </p>
      <p style={{ marginTop: '4px', fontSize: '14px' }}>
        Position souris: {mouseWorld ? `[${mouseWorld.x}, ${mouseWorld.y}]` : '—'}
      </p>
    </div>
  )
}
