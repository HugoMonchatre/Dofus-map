import { useState, type FC } from 'react'
import type { Dungeon } from '../types'
import { LEVEL_RANGES } from '../constants'

interface DungeonFilterProps {
  dungeons: Dungeon[]
  selectedLevelRange: string | null
  onLevelRangeSelect: (range: string | null) => void
  onDungeonSelect: (dungeon: Dungeon) => void
  selectedDungeon: Dungeon | null
  searchQuery: string
  onSearchChange: (query: string) => void
}

export const DungeonFilter: FC<DungeonFilterProps> = ({
  dungeons,
  selectedLevelRange,
  onLevelRangeSelect,
  onDungeonSelect,
  selectedDungeon,
  searchQuery,
  onSearchChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const DUNGEONS_PER_PAGE = 5

  // Filtrer par plage de niveau
  let filteredDungeons = dungeons
  if (selectedLevelRange) {
    const range = LEVEL_RANGES.find((r) => r.label === selectedLevelRange)
    if (range) {
      filteredDungeons = filteredDungeons.filter(
        (d) => d.level >= range.min && d.level <= range.max
      )
    }
  }

  // Filtrer par recherche
  if (searchQuery.trim()) {
    filteredDungeons = filteredDungeons.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Pagination
  const totalPages = Math.ceil(filteredDungeons.length / DUNGEONS_PER_PAGE)
  const startIndex = currentPage * DUNGEONS_PER_PAGE
  const paginatedDungeons = filteredDungeons.slice(startIndex, startIndex + DUNGEONS_PER_PAGE)

  // Réinitialiser la page quand les filtres changent
  const handleLevelRangeSelect = (range: string) => {
    setCurrentPage(0)
    onLevelRangeSelect(selectedLevelRange === range ? null : range)
  }

  const handleSearchChange = (query: string) => {
    setCurrentPage(0)
    onSearchChange(query)
  }

  return (
    <div
      style={{
        width: '22%',
        minWidth: '280px',
        maxWidth: '400px',
        padding: '16px',
        backgroundColor: '#1f1f1f',
        color: '#fff',
        borderRight: '2px solid #333',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '18px', whiteSpace: 'nowrap' }}>
        Recherche
      </h3>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un donjon..."
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #444',
          backgroundColor: '#2a2a2a',
          color: '#fff',
          fontSize: '14px',
          marginBottom: '16px',
          boxSizing: 'border-box',
        }}
      />

      <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '18px', whiteSpace: 'nowrap' }}>
        Filtres par niveau
      </h3>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {LEVEL_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => handleLevelRangeSelect(range.label)}
              style={{
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid #444',
                background: selectedLevelRange === range.label ? '#646cff' : '#2a2a2a',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '14px',
                textAlign: 'left',
                whiteSpace: 'nowrap',
              }}
            >
              {range.label}
            </button>
          ))}
        </div>
        {selectedLevelRange && (
          <button
            onClick={() => {
              setCurrentPage(0)
              onLevelRangeSelect(null)
            }}
            style={{
              marginTop: '8px',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #444',
              background: '#2a2a2a',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '12px',
              width: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            Réinitialiser filtre
          </button>
        )}
      </div>

      <h4 style={{ marginTop: '16px', marginBottom: '12px', fontSize: '16px', whiteSpace: 'nowrap' }}>
        Donjons ({filteredDungeons.length})
      </h4>

      <div>
        {paginatedDungeons.map((dungeon) => (
          <div
            key={dungeon.name}
            onClick={() => onDungeonSelect(dungeon)}
            style={{
              padding: '10px',
              marginBottom: '8px',
              borderRadius: '6px',
              backgroundColor: selectedDungeon?.name === dungeon.name ? '#646cff' : '#2a2a2a',
              cursor: 'pointer',
              border: '1px solid #444',
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '14px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {dungeon.name}
            </div>
            <div
              style={{
                fontSize: '12px',
                opacity: 0.7,
                marginTop: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              Niveau {dungeon.level} • [{dungeon.coord.x}, {dungeon.coord.y}]
            </div>
          </div>
        ))}

        {filteredDungeons.length === 0 && (
          <div
            style={{
              padding: '20px',
              textAlign: 'center',
              opacity: 0.5,
              fontSize: '14px',
            }}
          >
            Aucun donjon trouvé
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px',
            gap: '8px',
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #444',
              background: currentPage === 0 ? '#1a1a1a' : '#2a2a2a',
              color: currentPage === 0 ? '#666' : '#fff',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              flex: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Précédent
          </button>
          <span style={{ fontSize: '12px', opacity: 0.7, whiteSpace: 'nowrap' }}>
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #444',
              background: currentPage === totalPages - 1 ? '#1a1a1a' : '#2a2a2a',
              color: currentPage === totalPages - 1 ? '#666' : '#fff',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              fontSize: '12px',
              flex: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  )
}
