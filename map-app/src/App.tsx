import { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import type { Dungeon } from './types'
import { MapCanvas } from './components/MapCanvas'
import { DungeonModal } from './components/DungeonModal'
import { DungeonFilter } from './components/DungeonFilter'
import { CompositionDetail } from './components/CompositionDetail'
import { DUNGEONS, LEVEL_RANGES } from './constants'

function App() {
  const [selectedDungeon, setSelectedDungeon] = useState<Dungeon | null>(null)
  const [dungeonForModal, setDungeonForModal] = useState<Dungeon | null>(null)
  const [selectedLevelRange, setSelectedLevelRange] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

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
                <MapCanvas
                  onDungeonClick={handleDungeonClick}
                  selectedDungeon={selectedDungeon}
                  onDungeonDeselect={handleDungeonDeselect}
                  filteredDungeons={filteredDungeons}
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
