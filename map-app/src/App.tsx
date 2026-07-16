import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import type { Dungeon } from './types'
import { MapCanvas } from './components/MapCanvas'
import { DungeonModal } from './components/DungeonModal'
import { DungeonFilter } from './components/DungeonFilter'
import { CompositionDetail } from './components/CompositionDetail'
import { DUNGEONS, LEVEL_RANGES, GAME_MAPS, type GameMap } from './constants'

function App() {
  const [selectedDungeon, setSelectedDungeon] = useState<Dungeon | null>(null)
  const [dungeonForModal, setDungeonForModal] = useState<Dungeon | null>(null)
  const [selectedLevelRange, setSelectedLevelRange] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showGrid, setShowGrid] = useState(true)
  const [showZones, setShowZones] = useState(true)
  const [selectedMap, setSelectedMap] = useState<GameMap>(GAME_MAPS[0])

  // Filtrer les donjons par plage de niveau et recherche
  const filteredDungeons = useMemo(() => {
    let filtered = DUNGEONS

    // Filtrer par plage de niveau
    if (selectedLevelRange) {
      const range = LEVEL_RANGES.find((r) => r.label === selectedLevelRange)
      if (range) {
        filtered = filtered.filter((d) => d.level >= range.min && d.level <= range.max)
      }
    }

    // Filtrer par recherche
    if (searchQuery.trim()) {
      filtered = filtered.filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return filtered
  }, [selectedLevelRange, searchQuery])

  const handleLevelRangeSelect = (range: string | null) => {
    setSelectedLevelRange(range)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleDungeonSelect = (dungeon: Dungeon) => {
    setSelectedDungeon(dungeon)
  }

  const handleDungeonClick = (dungeon: Dungeon) => {
    setSelectedDungeon(dungeon)
    setDungeonForModal(dungeon)
  }

  const handleDungeonDeselect = () => {
    setSelectedDungeon(null)
  }

  const handleCloseModal = () => {
    setDungeonForModal(null)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: 0 }}>
            <h1 style={{ padding: '20px', margin: 0 }}>Map Dofus</h1>
            <div style={{ display: 'flex', gap: '0', alignItems: 'flex-start' }}>
              <DungeonFilter
                dungeons={DUNGEONS}
                selectedLevelRange={selectedLevelRange}
                onLevelRangeSelect={handleLevelRangeSelect}
                onDungeonSelect={handleDungeonSelect}
                selectedDungeon={selectedDungeon}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
              <div style={{ position: 'relative', display: 'inline-block', padding: '20px' }}>
                <div style={{ marginBottom: '10px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div>
                    <label style={{ marginRight: '8px' }}>Map:</label>
                    <select
                      value={selectedMap.id}
                      onChange={(e) => {
                        const map = GAME_MAPS.find((m) => m.id === e.target.value)
                        if (map) setSelectedMap(map)
                      }}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                      }}
                    >
                      {GAME_MAPS.map((map) => (
                        <option key={map.id} value={map.id}>
                          {map.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label style={{ cursor: 'pointer', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      checked={showGrid}
                      onChange={(e) => setShowGrid(e.target.checked)}
                      style={{ marginRight: '8px' }}
                    />
                    Afficher la grille
                  </label>
                  <label style={{ cursor: 'pointer', userSelect: 'none' }}>
                    <input
                      type="checkbox"
                      checked={showZones}
                      onChange={(e) => setShowZones(e.target.checked)}
                      style={{ marginRight: '8px' }}
                    />
                    Afficher les zones
                  </label>
                </div>
                <MapCanvas
                  onDungeonClick={handleDungeonClick}
                  selectedDungeon={selectedDungeon}
                  onDungeonDeselect={handleDungeonDeselect}
                  filteredDungeons={filteredDungeons}
                  showGrid={showGrid}
                  showZones={showZones}
                  gameMap={selectedMap}
                />
              </div>
            </div>

            <DungeonModal dungeon={dungeonForModal} onClose={handleCloseModal} />
          </div>
        }
      />
      <Route path="/composition/:id" element={<CompositionDetail />} />
    </Routes>
  )
}

export default App
