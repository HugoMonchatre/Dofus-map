import { useRef, useEffect, useState, useCallback, type FC } from 'react'
import type { Coordinates, CanvasCoordinates, Dungeon } from '../types'
import { worldToCanvas, canvasToWorld, findDungeonAt } from '../utils/coordinates'
import {
  COORD_STEP,
  DUNGEON_ICON_SIZE,
  type GameMap,
} from '../constants'

interface MapCanvasProps {
  onDungeonClick: (dungeon: Dungeon) => void
  selectedDungeon: Dungeon | null
  onDungeonDeselect: () => void
  filteredDungeons: Dungeon[]
  showGrid: boolean
  showZones: boolean
  gameMap: GameMap
}

export const MapCanvas: FC<MapCanvasProps> = ({
  onDungeonClick,
  selectedDungeon,
  onDungeonDeselect,
  filteredDungeons,
  showGrid,
  showZones,
  gameMap,
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
    img.src = gameMap.image
    img.onload = () => setImage(img)
    // Reset camera when map changes
    setCameraX(0)
    setCameraY(0)
    setZoom(1)
  }, [gameMap])

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

    const imageCoord = worldToCanvas(selectedDungeon.coord, imgW, imgH, gameMap.worldBounds)

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

    const gridStepX = imgW / gameMap.gridCols
    const gridStepY = imgH / gameMap.gridRows

    // Dessiner les zones (approche basée sur les cellules)
    if (showZones && gameMap.zones && gameMap.zones.length > 0) {
      gameMap.zones.forEach((zone) => {
        const cellsInZone = new Set<string>()

        // Cas spécial: ligne (2 points)
        if (zone.points.length === 2) {
          const p1 = zone.points[0]
          const p2 = zone.points[1]

          // Ligne horizontale
          if (p1.y === p2.y) {
            const minX = Math.min(p1.x, p2.x)
            const maxX = Math.max(p1.x, p2.x)
            for (let x = minX; x <= maxX; x++) {
              cellsInZone.add(`${x},${p1.y}`)
            }
          }
          // Ligne verticale
          else if (p1.x === p2.x) {
            const minY = Math.min(p1.y, p2.y)
            const maxY = Math.max(p1.y, p2.y)
            for (let y = minY; y <= maxY; y++) {
              cellsInZone.add(`${p1.x},${y}`)
            }
          }
        } else if (zone.points.length >= 3) {
          // Polygone normal
          const points = zone.points

          // Étape 1: Collecter les cellules de bordure (sur les arêtes H/V explicites)
          const boundaryCells = new Set<string>()

          // Ajouter les cellules sur les arêtes horizontales et verticales du polygone
          for (let i = 0; i < points.length; i++) {
            const p1 = points[i]
            const p2 = points[(i + 1) % points.length]

            // Arête horizontale
            if (p1.y === p2.y) {
              const minX = Math.min(p1.x, p2.x)
              const maxX = Math.max(p1.x, p2.x)
              for (let x = minX; x <= maxX; x++) {
                boundaryCells.add(`${x},${p1.y}`)
              }
            }
            // Arête verticale
            else if (p1.x === p2.x) {
              const minY = Math.min(p1.y, p2.y)
              const maxY = Math.max(p1.y, p2.y)
              for (let y = minY; y <= maxY; y++) {
                boundaryCells.add(`${p1.x},${y}`)
              }
            }
            // Diagonale: on ajoute juste les deux sommets
            else {
              boundaryCells.add(`${p1.x},${p1.y}`)
              boundaryCells.add(`${p2.x},${p2.y}`)
            }
          }

          // Étape 2: Scanline fill avec TOUTES les arêtes (y compris diagonales)
          boundaryCells.forEach((cell) => cellsInZone.add(cell))

          const minY = Math.min(...points.map((p) => p.y))
          const maxY = Math.max(...points.map((p) => p.y))

          for (let y = minY; y <= maxY; y++) {
            // Trouver toutes les intersections des arêtes avec ce niveau y
            const xIntersections: number[] = []

            for (let i = 0; i < points.length; i++) {
              const p1 = points[i]
              const p2 = points[(i + 1) % points.length]

              // Arête horizontale: pas d'intersection pour le scanline
              if (p1.y === p2.y) continue

              const yMin = Math.min(p1.y, p2.y)
              const yMax = Math.max(p1.y, p2.y)

              // Vérifier si cette arête traverse ce niveau y (intervalle semi-ouvert)
              if (y >= yMin && y < yMax) {
                // Calculer l'intersection x
                if (p1.x === p2.x) {
                  // Arête verticale
                  xIntersections.push(p1.x)
                } else {
                  // Arête diagonale: interpolation linéaire
                  const t = (y - p1.y) / (p2.y - p1.y)
                  const xIntersect = p1.x + t * (p2.x - p1.x)
                  xIntersections.push(xIntersect)
                }
              }
            }

            // Trier les intersections et remplir entre les paires
            xIntersections.sort((a, b) => a - b)

            for (let i = 0; i < xIntersections.length; i += 2) {
              const x1 = xIntersections[i]
              const x2 = xIntersections[i + 1]
              if (x2 !== undefined) {
                // Remplir les cellules entières entre les intersections
                const startX = Math.ceil(x1)
                const endX = Math.floor(x2)
                for (let x = startX; x <= endX; x++) {
                  cellsInZone.add(`${x},${y}`)
                }
              }
            }
          }
        }

        // Ajouter les cellules isolées
        if (zone.isolatedCells) {
          zone.isolatedCells.forEach((cell) => {
            cellsInZone.add(`${cell.x},${cell.y}`)
          })
        }

        // Étape 3: Dessiner chaque cellule
        cellsInZone.forEach((cellKey) => {
          const [x, y] = cellKey.split(',').map(Number)

          // Convertir en coordonnées canvas
          const imageCoord = worldToCanvas({ x, y }, imgW, imgH, gameMap.worldBounds)
          const cellX = Math.floor(imageCoord.x / gridStepX) * gridStepX
          const cellY = Math.floor(imageCoord.y / gridStepY) * gridStepY

          const screenX = (cellX - cameraX) * scaleX
          const screenY = (cellY - cameraY) * scaleY
          const cellW = gridStepX * scaleX
          const cellH = gridStepY * scaleY

          // Remplir la cellule
          ctx.fillStyle = zone.color
          ctx.fillRect(screenX, screenY, cellW, cellH)

          // Dessiner les bordures là où il n'y a pas de cellule adjacente
          if (zone.borderColor) {
            ctx.strokeStyle = zone.borderColor
            ctx.lineWidth = 2

            // Vérifier chaque direction
            const hasTop = cellsInZone.has(`${x},${y - 1}`)
            const hasBottom = cellsInZone.has(`${x},${y + 1}`)
            const hasLeft = cellsInZone.has(`${x - 1},${y}`)
            const hasRight = cellsInZone.has(`${x + 1},${y}`)

            ctx.beginPath()
            if (!hasTop) {
              ctx.moveTo(screenX, screenY)
              ctx.lineTo(screenX + cellW, screenY)
            }
            if (!hasBottom) {
              ctx.moveTo(screenX, screenY + cellH)
              ctx.lineTo(screenX + cellW, screenY + cellH)
            }
            if (!hasLeft) {
              ctx.moveTo(screenX, screenY)
              ctx.lineTo(screenX, screenY + cellH)
            }
            if (!hasRight) {
              ctx.moveTo(screenX + cellW, screenY)
              ctx.lineTo(screenX + cellW, screenY + cellH)
            }
            ctx.stroke()
          }
        })
      })
    }

    if (showGrid) {
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
    }

    // Collecter les donjons survolés pour afficher un seul tooltip
    const hoveredDungeons: { dungeon: Dungeon; screenX: number; screenY: number; cellW: number; cellH: number }[] = []

    filteredDungeons.forEach((dungeon) => {
      const imageCoord = worldToCanvas(dungeon.coord, imgW, imgH, gameMap.worldBounds)
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
        hoveredDungeons.push({ dungeon, screenX, screenY, cellW, cellH })
      }
    })

    // Afficher le tooltip avec tous les donjons survolés
    if (hoveredDungeons.length > 0) {
      const { screenX, screenY, cellW } = hoveredDungeons[0]
      const labels = hoveredDungeons.map((h) => `${h.dungeon.name} Niv. ${h.dungeon.level}`)
      const lineHeight = 16 * scaleX

      ctx.font = `${14 * scaleX}px sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'

      const maxWidth = Math.max(...labels.map((l) => ctx.measureText(l).width))
      const paddingX = 8 * scaleX
      const paddingY = 6 * scaleY
      const totalHeight = lineHeight * labels.length + paddingY * 2

      const labelX = screenX + cellW / 2
      const labelY = screenY - 4

      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(
        labelX - maxWidth / 2 - paddingX,
        labelY - totalHeight + paddingY,
        maxWidth + paddingX * 2,
        totalHeight
      )

      ctx.fillStyle = '#ffffff'
      labels.forEach((label, index) => {
        const y = labelY - (labels.length - 1 - index) * lineHeight
        ctx.fillText(label, labelX, y)
      })
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.font = `${12 * scaleX}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (let x = gameMap.worldBounds.minX; x <= gameMap.worldBounds.maxX; x += COORD_STEP) {
      const imageX = worldToCanvas({ x, y: gameMap.worldBounds.minY }, imgW, imgH, gameMap.worldBounds).x
      const canvasX = (imageX - cameraX) * scaleX
      if (canvasX < -50 || canvasX > width + 50) continue
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillText(x.toString(), canvasX, 15 * scaleY)
    }

    ctx.textAlign = 'right'
    for (let y = gameMap.worldBounds.minY; y <= gameMap.worldBounds.maxY; y += COORD_STEP) {
      const imageY = worldToCanvas({ x: gameMap.worldBounds.minX, y }, imgW, imgH, gameMap.worldBounds).y
      const canvasY = (imageY - cameraY) * scaleY
      if (canvasY < -50 || canvasY > height + 50) continue
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillText(y.toString(), 30 * scaleX, canvasY)
    }

    ctx.fillStyle = 'rgba(255, 0, 0, 0.8)'
    const corners: Coordinates[] = [
      { x: gameMap.worldBounds.minX, y: gameMap.worldBounds.minY },
      { x: gameMap.worldBounds.maxX, y: gameMap.worldBounds.minY },
      { x: gameMap.worldBounds.minX, y: gameMap.worldBounds.maxY },
      { x: gameMap.worldBounds.maxX, y: gameMap.worldBounds.maxY },
    ]

    corners.forEach((corner) => {
      const imageCoord = worldToCanvas(corner, imgW, imgH, gameMap.worldBounds)
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

    // Afficher le nom de la zone survolée en haut à droite
    if (mouseWorld && showZones && gameMap.zones && gameMap.zones.length > 0) {
      // Fonction pour vérifier si un point est dans le polygone (ray casting)
      const isPointInPolygon = (px: number, py: number, points: { x: number; y: number }[]): boolean => {
        let inside = false
        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
          const xi = points[i].x
          const yi = points[i].y
          const xj = points[j].x
          const yj = points[j].y

          if (yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
            inside = !inside
          }
        }
        return inside
      }

      // Trouver la zone survolée (même logique que le rendu)
      const hoveredZone = gameMap.zones.find((zone) => {
        const mx = mouseWorld.x
        const my = mouseWorld.y

        // Vérifier d'abord les cellules isolées
        if (zone.isolatedCells?.some((c) => c.x === mx && c.y === my)) return true

        // Cas spécial: ligne (2 points)
        if (zone.points.length === 2) {
          const p1 = zone.points[0]
          const p2 = zone.points[1]

          // Ligne horizontale
          if (p1.y === p2.y && my === p1.y) {
            const minX = Math.min(p1.x, p2.x)
            const maxX = Math.max(p1.x, p2.x)
            if (mx >= minX && mx <= maxX) return true
          }
          // Ligne verticale
          else if (p1.x === p2.x && mx === p1.x) {
            const minY = Math.min(p1.y, p2.y)
            const maxY = Math.max(p1.y, p2.y)
            if (my >= minY && my <= maxY) return true
          }
          return false
        }

        if (zone.points.length < 3) return false

        const points = zone.points

        // Vérifier si le centre de la cellule survolée est dans le polygone
        if (isPointInPolygon(mx + 0.5, my + 0.5, points)) {
          return true
        }

        // Vérifier si la cellule est sur une arête horizontale ou verticale
        for (let i = 0; i < points.length; i++) {
          const p1 = points[i]
          const p2 = points[(i + 1) % points.length]

          // Arête horizontale
          if (p1.y === p2.y && my === p1.y) {
            const minX = Math.min(p1.x, p2.x)
            const maxX = Math.max(p1.x, p2.x)
            if (mx >= minX && mx <= maxX) return true
          }
          // Arête verticale
          else if (p1.x === p2.x && mx === p1.x) {
            const minY = Math.min(p1.y, p2.y)
            const maxY = Math.max(p1.y, p2.y)
            if (my >= minY && my <= maxY) return true
          }
        }

        // Vérifier si la cellule est exactement sur un sommet
        if (points.some((p) => p.x === mx && p.y === my)) return true

        return false
      })

      if (hoveredZone) {
        ctx.font = '14px sans-serif'
        ctx.textAlign = 'right'
        ctx.textBaseline = 'top'

        const textWidth = ctx.measureText(hoveredZone.name).width
        const paddingX = 10
        const paddingY = 6
        const boxX = width - textWidth - paddingX * 2 - 10
        const boxY = 10

        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        ctx.fillRect(boxX, boxY, textWidth + paddingX * 2, 28)

        ctx.fillStyle = '#ffffff'
        ctx.fillText(hoveredZone.name, width - 10 - paddingX, boxY + paddingY)
      }
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
    showGrid,
    showZones,
    gameMap,
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
    setMouseWorld(canvasToWorld({ x: imageX, y: imageY }, imgW, imgH, gameMap.worldBounds, gameMap.gridCols, gameMap.gridRows))
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

    const dungeon = findDungeonAt(imageX, imageY, imgW, imgH, filteredDungeons, DUNGEON_ICON_SIZE, gameMap.gridCols, gameMap.gridRows, gameMap.worldBounds)
    if (dungeon) {
      onDungeonClick(dungeon)
    } else {
      // Désélectionner si on clique en dehors d'un donjon
      onDungeonDeselect()
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
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
      const newZoom = Math.max(gameMap.minZoom, Math.min(gameMap.maxZoom, zoom + direction * zoomFactor))

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
    },
    [image, zoom, cameraX, cameraY, gameMap]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      canvas.removeEventListener('wheel', handleWheel)
    }
  }, [handleWheel])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={gameMap.canvasWidth}
        height={gameMap.canvasHeight}
        onClick={handleCanvasClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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
