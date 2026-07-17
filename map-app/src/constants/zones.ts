import type { Zone } from './index'

// Zones du Monde des Douzes
export const MAIN_WORLD_ZONES: Zone[] = [
  // Exemple de zone en forme de L
  {
    id: 'exemple-zone',
    name: 'Astrub (Cité d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 1, y: -21 },
      { x: 7, y: -21 },
      { x: 7, y: -15 },
      { x: 1, y: -15 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Carrière d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 8, y: -21 },
      { x: 12, y: -21 },
      { x: 12, y: -15 },
      { x: 8, y: -15 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Prairie d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 3, y: -14 },
      { x: 11, y: -14 },
      { x: 11, y: -11 },
      { x: 10, y: -11 },
      { x: 10, y: -10 },
      { x: 9, y: -10 },
      { x: 9, y: -8 },
      { x: 8, y: -8 },
      { x: 8, y: -9 },
      { x: 3, y: -9 },
      { x: 3, y: -8 },
      { x: 2, y: -8 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Champs d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 3, y: -31 },
      { x: 5, y: -31 },
      { x: 6, y: -30 },
      { x: 7, y: -28 },
      { x: 8, y: -24 },
      { x: 9, y: -24 },
      { x: 9, y: -22 },
      { x: 3, y: -22 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Calanques d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 8, y: -29 },
      { x: 10, y: -29 },
      { x: 13, y: -28 },
      { x: 13, y: -27 },
      { x: 12, y: -22 },
      { x: 10, y: -22 },
      { x: 10, y: -25 },
      { x: 8, y: -25 },
    ],
    isolatedCells: [
      { x: 8, y: -31 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Cimetière d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -3, y: -14 },
      { x: 2, y: -14 },
      { x: 2, y: -9 },
      { x: -3, y: -8 },
      { x: -4, y: -8 },
      { x: -4, y: -9 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Forêt d\'Astrub)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -29 },
      { x: 2, y: -28 },
      { x: 2, y: -30 },
      { x: 2, y: -22 },
      { x: 0, y: -22 },
      { x: 0, y: -15 },
      { x: -3, y: -15 },
      { x: -3, y: -22 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Astrub (Tainéla)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: -34 },
      { x: 2, y: -34 },
      { x: 3, y: -33 },
      { x: 4, y: -32 },
      { x: 2, y: -32 },
      { x: 2, y: -31 },
      { x: 1, y: -29 },
      { x: -1, y: -29 },
      { x: -2, y: -30 },
      { x: -2, y: -32 },
      { x: -1, y: -33 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Amakna (Château d\'Amakna)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 4, y: -8 },
      { x: 6, y: -8 },
      { x: 7, y: -6 },
      { x: 7, y: -5 },
      { x: 5, y: -4 },
      { x: 2, y: -4 },
      { x: 2, y: -7 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Plaines de Cania (Lac de Cania)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -8, y: -44 },
      { x: 1, y: -44 },
      { x: 1, y: -38 },
      { x: -5, y: -38 },
      { x: -5, y: -33 },
      { x: -8, y: -33 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Plaines de Cania (Cirque de Cania)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -13, y: -46 },
      { x: -9, y: -46 },
      { x: -9, y: -42 },
      { x: -13, y: -42 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Plaines de Cania (Pics de Cania)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -20, y: -44 },
      { x: -14, y: -44 },
      { x: -14, y: -36 },
      { x: -20, y: -36 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Plaines de Cania (Plaines Rocheuses)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -23, y: -56 },
      { x: -16, y: -56 },
      { x: -16, y: -45 },
      { x: -21, y: -45 },
      { x: -22, y: -46 },
      { x: -23, y: -47 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Plaines de Cania (Bois de Litneg)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -15, y: -59 },
      { x: -11, y: -59 },
      { x: -11, y: -56 },
      { x: -12, y: -56 },
      { x: -12, y: -47 },
      { x: -14, y: -47 },
      { x: -14, y: -45 },
      { x: -15, y: -45 },
    ],
  },
]

// Zones d'Incarnam
export const INCARNAM_ZONES: Zone[] = [
  {
    id: 'exemple-zone',
    name: 'Incarnam (Route des âmes)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -3 },
      { x: 4, y: -3 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Incarnam (Pâturages)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 1, y: -5 },
      { x: 3, y: -5 },
      { x: 4, y: -4 },
      { x: 1, y: -4 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Incarnam (Champs)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -3, y: -6 },
      { x: -1, y: -6 },
      { x: 0, y: -5 },
      { x: 0, y: -4 },
      { x: -2, y: -4 },
      { x: -3, y: -5 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Incarnam (Lac)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -2 },
      { x: 0, y: -2 },
      { x: 0, y: 1 },
      { x: -1, y: 1 },
      { x: -2, y: 0 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Incarnam (Forêt)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 1, y: -2 },
      { x: 3, y: -2 },
      { x: 3, y: -1 },
      { x: 2, y: 0 },
      { x: 1, y: 0 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Incarnam (Cimetière)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 4, y: -1 },
      { x: 5, y: -1 },
      { x: 5, y: 0 },
      { x: 4, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 0 },
    ],
  },

]

// Zones de la Dimension Enutrosor
export const ENUTROSOR_ZONES: Zone[] = [
  {
    id: 'exemple-zone',
    name: 'Enutrosor (Retraite des éternels)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -10, y: -6 },
      { x: -7, y: -6 },
      { x: -7, y: -4 },
      { x: -10, y: -4 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Enutrosor (Carrière Aurifère)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: -5 },
      { x: 3, y: -5 },
      { x: 3, y: -3 },
      { x: 0, y: -3 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Enutrosor (Fort Thune)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -5, y: -10 },
      { x: -3, y: -10 },
      { x: -3, y: -8 },
      { x: -6, y: -8 },
    ],
    isolatedCells: [
      { x: -4, y: -4 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Enutrosor (Creuset des Fortunés)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -3, y: -4 },
      { x: -2, y: -4 },
      { x: -1, y: -2 },
      { x: -1, y: -1 },
      { x: -6, y: -1 },
      { x: -6, y: -3 },
      { x: -3, y: -3 },
      //{ x: -3, y: -4 },
    ],
    isolatedCells: [
      { x: -5, y: -5 },  // cellule isolée
      { x: 0, y: 0 },  // cellule isolée
    ],
  },

]

// Zones de la Dimension Osavora
export const OSAVORA_ZONES: Zone[] = [
  {
    id: 'exemple-zone',
    name: 'Osavora (Queue de Gargandyas)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [

    ],
    isolatedCells: [
      { x: 10, y: 27 },  // cellule isolée
      { x: 0, y: 31 },  // cellule isolée
      { x: 0, y: 18 },  // cellule isolée
      { x: 1, y: 17 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Osavora (Réserve Touffue)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 5, y: 9 },
      { x: 6, y: 9 },
      { x: 6, y: 11 },
      { x: 5, y: 12 },
      { x: 4, y: 12 },
      { x: 4, y: 10 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Osavora (Village Rhoarim)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 13, y: 1 },
      { x: 13, y: 2 },
      { x: 12, y: 2 },
      { x: 12, y: 5 },
      { x: 10, y: 5 },
      { x: 10, y: 7 },
      { x: 9, y: 7 },
      { x: 9, y: 6 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 10, y: 3 },
    ],
    isolatedCells: [
      { x: 21, y: 4 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Osavora (Village Rhoarim)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 8, y: 8 },
      { x: 10, y: 8 },
      { x: 10, y: 11 },
      { x: 9, y: 13 },
      { x: 8, y: 15 },
      { x: 4, y: 16 },
      { x: 2, y: 16 },
      { x: 2, y: 14 },
      { x: 3, y: 13 },
      { x: 6, y: 13 },
      { x: 6, y: 12 },
      { x: 7, y: 9 },
    ],
    isolatedCells: [
      { x: 17, y: 8 },  // cellule isolée
      { x: 15, y: 9 },  // cellule isolée
      { x: 16, y: 9 },  // cellule isolée
    ],
  },
]

// Zones de la Dimension Srambad
export const SRAMBAD_ZONES: Zone[] = []

// Zones de la Dimension Xelorium
export const XELORIUM_ZONES: Zone[] = []

// Zones de la Dimension Ecaflipus
export const ECAFLIPUS_ZONES: Zone[] = []

// Zones de la Dimension Cauchemar
export const CAUCHEMAR_ZONES: Zone[] = [
    {
    id: 'exemple-zone',
    name: 'Cauchemar des Ravageurs (Cauchemar des Ravageurs)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 4 },
      { x: 0, y: 4 },
    ],
  },
]
