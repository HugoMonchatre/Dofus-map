import { useState, useEffect, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Dungeon } from '../types'
import { apiService, type Composition } from '../services/api'

interface DungeonModalProps {
  dungeon: Dungeon | null
  onClose: () => void
}

const PARTY_SIZES = [4, 5, 6, 7, 8]

export const DungeonModal: FC<DungeonModalProps> = ({ dungeon, onClose }) => {
  const navigate = useNavigate()
  const [selectedPartySize, setSelectedPartySize] = useState<number | null>(null)
  const [compositions, setCompositions] = useState<Composition[]>([])
  const [loading, setLoading] = useState(false)

  // Charger les compositions quand la taille de groupe change
  useEffect(() => {
    if (!dungeon || !selectedPartySize) return

    const loadCompositions = async () => {
      if (!dungeon.id) return
      setLoading(true)
      const compos = await apiService.getCompositionsByDungeon(dungeon.id, selectedPartySize)
      setCompositions(compos)
      setLoading(false)
    }

    loadCompositions()
  }, [dungeon, selectedPartySize])

  if (!dungeon) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1f1f1f',
          color: '#fff',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '400px',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: '6px' }}>{dungeon.name}</h3>
        <p style={{ marginTop: 0, marginBottom: '16px', opacity: 0.8 }}>
          Niveau {dungeon.level} • [{dungeon.coord.x}, {dungeon.coord.y}]
        </p>

        {/* Sélection de la taille de groupe */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginTop: 0, marginBottom: '8px', fontSize: '14px' }}>
            Nombre de personnages
          </h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {PARTY_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedPartySize(size)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #444',
                  background: selectedPartySize === size ? '#646cff' : '#2a2a2a',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {size} joueurs
              </button>
            ))}
          </div>
        </div>

        {/* Liste des compositions avec leurs cases */}
        {selectedPartySize && (
          <div>
            {loading && <p style={{ opacity: 0.6, fontSize: '14px' }}>Chargement...</p>}

            {!loading && compositions.length === 0 && (
              <p style={{ opacity: 0.6, fontSize: '14px', textAlign: 'center' }}>
                Aucune composition disponible pour {selectedPartySize} joueurs
              </p>
            )}

            {!loading &&
              compositions.length > 0 &&
              compositions.map((compo) => (
                <div key={compo.id} style={{ marginBottom: '24px' }}>
                  {/* Titre de la composition */}
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      background: '#2a2a2a',
                      border: '1px solid #444',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{compo.title}</div>
                        {compo.description && (
                          <div
                            style={{
                              fontSize: '12px',
                              opacity: 0.7,
                              marginTop: '4px',
                            }}
                          >
                            {compo.description}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          onClose()
                          navigate(`/composition/${compo.id}`)
                        }}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '4px',
                          border: '1px solid #646cff',
                          background: '#646cff',
                          color: '#fff',
                          cursor: 'pointer',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          marginLeft: '12px',
                        }}
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>

                  {/* Grille de cases pour cette composition */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      justifyContent: 'flex-start',
                      width: '448px',
                      margin: '0 auto',
                    }}
                  >
                    {compo.details?.map((detail) => (
                      <div
                        key={detail.id}
                        style={{
                          width: '100px',
                          height: '100px',
                          flexShrink: 0,
                          borderRadius: '6px',
                          background: '#2a2a2a',
                          border: '2px solid #646cff',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          position: 'relative',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 'bold',
                            fontSize: '11px',
                            textAlign: 'center',
                            lineHeight: '1.2',
                          }}
                        >
                          {detail.class_name}
                        </div>
                        {detail.role && (
                          <div
                            style={{
                              fontSize: '9px',
                              opacity: 0.7,
                              marginTop: '4px',
                              textAlign: 'center',
                            }}
                          >
                            {detail.role}
                          </div>
                        )}
                        <div
                          style={{
                            position: 'absolute',
                            top: '4px',
                            left: '6px',
                            fontSize: '10px',
                            opacity: 0.5,
                          }}
                        >
                          {detail.position}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #444',
              background: '#2a2a2a',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
