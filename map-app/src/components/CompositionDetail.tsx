import { useState, useEffect, type FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { apiService, type Composition } from '../services/api'

export const CompositionDetail: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [composition, setComposition] = useState<Composition | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number>(0)

  useEffect(() => {
    const loadComposition = async () => {
      if (!id) return
      setLoading(true)
      const data = await apiService.getCompositionById(parseInt(id))
      setComposition(data)
      setLoading(false)
    }

    loadComposition()
  }, [id])

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Chargement...</p>
      </div>
    )
  }

  if (!composition) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Composition non trouvée</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '6px',
            border: '1px solid #646cff',
            background: '#646cff',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Retour à la carte
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: '20px',
          padding: '8px 16px',
          borderRadius: '6px',
          border: '1px solid #444',
          background: '#2a2a2a',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        ← Retour à la carte
      </button>

      <h1 style={{ marginTop: 0, marginBottom: '8px' }}>{composition.title}</h1>
      <p style={{ marginTop: 0, marginBottom: '8px', opacity: 0.8, fontSize: '16px' }}>
        {composition.description}
      </p>
      <p style={{ marginTop: 0, marginBottom: '32px', opacity: 0.6, fontSize: '14px' }}>
        {composition.dungeon_name} • {composition.party_size} joueurs
      </p>

      {/* Sélection des personnages en ligne horizontale */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Personnages</h2>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}
        >
          {composition.details?.map((detail, index) => (
            <div
              key={detail.id}
              onClick={() => setSelectedCharacterIndex(index)}
              style={{
                minWidth: '120px',
                padding: '16px',
                borderRadius: '8px',
                background: selectedCharacterIndex === index ? '#646cff' : '#2a2a2a',
                border: `2px solid ${selectedCharacterIndex === index ? '#646cff' : '#444'}`,
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  opacity: 0.7,
                  marginBottom: '4px',
                }}
              >
                Position {detail.position}
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                {detail.class_name}
              </div>
              {detail.role && (
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{detail.role}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Détails du personnage sélectionné */}
      {composition.details && composition.details[selectedCharacterIndex] && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>
            Détails - {composition.details[selectedCharacterIndex].class_name}
          </h2>
          <div
            style={{
              background: '#1f1f1f',
              border: '2px solid #646cff',
              borderRadius: '8px',
              padding: '24px',
            }}
          >
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: '#646cff',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}
              >
                Position {composition.details[selectedCharacterIndex].position}
              </div>
            </div>

            {composition.details[selectedCharacterIndex].role && (
              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#ffd700',
                  }}
                >
                  Rôle
                </div>
                <div style={{ fontSize: '16px' }}>
                  {composition.details[selectedCharacterIndex].role}
                </div>
              </div>
            )}

            {composition.details[selectedCharacterIndex].equipment && (
              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#8b8bff',
                  }}
                >
                  Équipement
                </div>
                <div style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.95 }}>
                  {composition.details[selectedCharacterIndex].equipment}
                </div>
              </div>
            )}

            {composition.details[selectedCharacterIndex].notes && (
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    opacity: 0.8,
                  }}
                >
                  Notes
                </div>
                <div style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.8 }}>
                  {composition.details[selectedCharacterIndex].notes}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Vidéo YouTube */}
      {composition.youtube_url && (
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Tutoriel vidéo</h2>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              background: '#000',
            }}
          >
            <iframe
              src={composition.youtube_url}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
