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
  {
    id: 'exemple-zone',
    name: 'Île du Minotoror (Île du Minotoror)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -43, y: -19 },
      { x: -40, y: -19 },
      { x: -40, y: -16 },
      { x: -43, y: -16 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île d\'Otomaï (Village côtier)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -47, y: 15 },
      { x: -45, y: 15 },
      { x: -45, y: 21 },
      { x: -46, y: 22 },
      { x: -48, y: 22 },
      { x: -48, y: 21 },
    ],
    isolatedCells: [
      { x: -44, y: 21 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île d\'Otomaï (Île des naufragés)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -45, y: -2 },
      { x: -42, y: -2 },
      { x: -42, y: 1 },
      { x: -43, y: 2 },
      { x: -44, y: 2 },
      { x: -45, y: 1 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île d\'Otomaï (Île des naufragés)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -62, y: -10 },
      { x: -59, y: -10 },
      { x: -59, y: -7 },
      { x: -62, y: -7 },
    ],
    isolatedCells: [
      { x: -59, y: -6 },  // cellule isolée
    ],
    excludedCells: [
      [{ x: -61, y: -9 },{ x: -60, y: -9 },],
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Îlots de la mer Kantil (Îlots Estitch)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -47, y: -70 },
      { x: -45, y: -70 },
      { x: -45, y: -68 },
      { x: -47, y: -68 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île de Sakaï (Forêt enneigée)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -52, y: -45 },
      { x: -50, y: -45 },
      { x: -50, y: -44 },
      { x: -51, y: -43 },
      { x: -51, y: -42 },
      { x: -53, y: -42 },
      { x: -53, y: -44 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île de Sakaï (Plaine de Sakaï)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -55, y: -42 },
      { x: -54, y: -42 },
      { x: -54, y: -39 },
      { x: -55, y: -40 },
    ],
    isolatedCells: [
      { x: -53, y: -41 },  // cellule isolée
      { x: -52, y: -41 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île de Sakaï (Port de Sakaï)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
    ],
    isolatedCells: [
      { x: -53, y: -40 },  // cellule isolée
      { x: -52, y: -39 },  // cellule isolée
      { x: -51, y: -38 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Île de Frigost (Roc des Salbatroces)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -83, y: -61 },
      { x: -83, y: -58 },
      { x: -84, y: -57 },
      { x: -84, y: -60 },
    ],
    isolatedCells: [
      { x: -85, y: -59 },  // cellule isolée
      { x: -82, y: -59 },  // cellule isolée
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
export const SRAMBAD_ZONES: Zone[] = [
  {
    id: 'exemple-zone',
    name: 'Srambad (Hauts Ténébreux)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 7, y: -3 },
      { x: 8, y: -2 },
      { x: 8, y: -1 },
      { x: 7, y: 0 },
      { x: 5, y: 0 },
      { x: 5, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 5, y: -2 },

    ],
    isolatedCells: [
      { x: 9, y: -5 },  // cellule isolée
      { x: 8, y: -4 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Srambad (Ruelles des Eaux-Suaires)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 2 },
      { x: 6, y: 1 },
      { x: 7, y: 2 },
      { x: 8, y: 3 },
      { x: 8, y: 3 },
      { x: 10, y: 3 },
      { x: 8, y: 4 },
      { x: 8, y: 5 },
      { x: 7, y: 4 },
      { x: 6, y: 3 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
      { x: 3, y: 2 },

    ],
    isolatedCells: [
      { x: 0, y: 0 },  // cellule isolée
      { x: 1, y: 1 },  // cellule isolée
      { x: 1, y: 6 },  // cellule isolée
      { x: 2, y: 6 },  // cellule isolée
      { x: 10, y: 4 },
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Srambad (Ruelles des Eaux-Suaires)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 8, y: 6 },
      { x: 8, y: 8 },
      { x: 7, y: 9 },
      { x: 4, y: 9 },
      { x: 4, y: 8 },
      { x: 5, y: 7 },

    ],
    isolatedCells: [
      { x: 9, y: 6 },  // cellule isolée
      { x: 6, y: 5 },

    ],
  },
]

// Zones de la Dimension Xelorium
export const XELORIUM_ZONES: Zone[] = [
  {
    id: 'exemple-zone',
    name: 'Xélorium (Lendemains incertains)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 4, y: -6 },
      { x: 5, y: -5 },
      { x: 6, y: -4 },
      { x: 4, y: -3 },
      { x: 1, y: -3 },
      { x: 1, y: -4 },
      { x: 2, y: -5 },
    ],
    isolatedCells: [
      { x: 7, y: -7 },  // cellule isolée
      { x: 6, y: -6 },  // cellule isolée
      { x: 0, y: -5 },  // cellule isolée
      { x: 0, y: -2 },  // cellule isolée
      { x: 5, y: -2 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Xélorium (Lendemains incertains)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 4, y: -1 },
      { x: 5, y: 0 },
      { x: 6, y: 1 },
      { x: 4, y: 2 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ],
    isolatedCells: [
      { x: 7, y: -2 },  // cellule isolée
      { x: 6, y: -1 },  // cellule isolée
      { x: 0, y: 0 },  // cellule isolée
      { x: 0, y: 3 },  // cellule isolée
    ],
  },
  {
    id: 'exemple-zone',
    name: 'Xélorium (Lendemains incertains)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 4, y: 7 },
      { x: 1, y: 7 },
      { x: 1, y: 6 },
      { x: 2, y: 5 },
    ],
    isolatedCells: [
      { x: 7, y: 3 },  // cellule isolée
      { x: 6, y: 4 },  // cellule isolée
      { x: 0, y: 5 },  // cellule isolée
      { x: 0, y: 8 },  // cellule isolée
    ],
  },
]

// Zones de la Dimension Ecaflipus
export const ECAFLIPUS_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Ecaflipus (Lande Poilue)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 2 },
      { x: 3, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 0, y: 1 },

    ],
    isolatedCells: [
      { x: 5, y: 2 },  // cellule isolée
      { x: 5, y: -1 },  // cellule isolée
      { x: 6, y: -2 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Ecaflipus (Pierres de L\'élévation)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -7 },
      { x: -1, y: -8 },
      { x: 0, y: -7 },
      { x: 0, y: -6 },
      { x: -1, y: -6 },
      { x: -2, y: -5 },
      { x: -3, y: -6 },
    ],
    extraShapes: [
      //[{ x: 5, y: 5 }, { x: 7, y: 5 }, { x: 7, y: 7 }, { x: 5, y: 7 }],  // mini-zone rectangulaire
      [{ x: -9, y: -10 }, { x: -6, y: -10 }],  // mini-zone en ligne
      [{ x: -6, y: -9 }, { x: -5, y: -9 }],  // mini-zone en ligne
      [{ x: -4, y: -8 }, { x: -3, y: -8 }],  // mini-zone en ligne
      [{ x: 1, y: -8 }, { x: 2, y: -8 }],  // mini-zone en ligne
      [{ x: 0, y: -4 }, { x: 0, y: -3 }],  // mini-zone en ligne
      [{ x: 1, y: -3 }, { x: 1, y: -1 }],  // mini-zone en ligne
      //[{ x: 15, y: 15 }],  // mini-zone d'une seule case
    ],
    isolatedCells: [
      { x: -7, y: -11 },  // cellule isolée
      { x: 1, y: -5 },  // cellule isolée
      { x: -1, y: -4 },  // cellule isolée
      { x: 2, y: -2 },  // cellule isolée
      { x: 3, y: -9 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Ecaflipus (Miausolée du Pounicheur)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
    ],
    isolatedCells: [
      { x: 3, y: -9 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Ecaflipus (Temple de Kerubim)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -11, y: -22 },
      { x: -9, y: -22 },
      { x: -9, y: -19 },
      { x: -10, y: -19 },
      { x: -11, y: -18 },
      { x: -13, y: -18 },
      { x: -13, y: -19 },
      { x: -12, y: -20 },
      { x: -12, y: -21 },
    ],
    isolatedCells: [
      { x: -13, y: -21 },  // cellule isolée
      { x: -10, y: -11 },  // cellule isolée
    ],
  },
]

// Zones des Canaux Méphitiques
export const CANAUX_MEPHITIQUES_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Bonta (Canaux Méphitiques)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -34, y: -59 },
      { x: -34, y: -58 },
      { x: -31, y: -58 },
      { x: -31, y: -54 },
      { x: -33, y: -54 },
      { x: -33, y: -53 },
    ],
    isolatedCells: [
      { x: -30, y: -55 },  // cellule isolée
    ],
    excludedCells: [
      [{ x: -32, y: -57 }],  // case vide au milieu
    ],
  },
]

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

// Zones de la Caverne des Fungus
export const CAVERNE_DES_FUNGUS_ZONES: Zone[] = []

// Zones de Crocuzko
export const CROCUZKO_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Archipel des Écailles (Crocuzko)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -85, y: -18 },
      { x: -82, y: -18 },
      { x: -81, y: -17 },
      { x: -81, y: -16 },
      { x: -82, y: -15 },
      { x: -82, y: -14 },
      { x: -86, y: -14 },
      { x: -85, y: -15 },
      { x: -86, y: -16 },
      { x: -86, y: -17 },
      { x: -85, y: -18 },

    ],
    isolatedCells: [
      { x: -80, y: -12 },  // cellule isolée
      { x: -80, y: -11 },  // cellule isolée
      { x: -79, y: -11 },  // cellule isolée
      { x: -84, y: -13 },  // cellule isolée
    ],
  },
]

// Zones du Sanctuaire des Dragoeufs
export const SANCTUAIRE_DRAGOEUFS_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Amakna (Sanctuaire des Dragoeufs)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -6, y: 24 },
      { x: -2, y: 24 },
      { x: -2, y: 28 },
      { x: -6, y: 28 },
    ],
  },
]

// Zones des Épaves Silencieuses
export const EPAVES_SILENCIEUSES_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Île de Frigost (Épaves Silencieuses)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -48, y: -84 },
      { x: -47, y: -84 },
      { x: -46, y: -83 },
      { x: -45, y: -82 },
      { x: -45, y: -80 },
      { x: -46, y: -80 },
      { x: -47, y: -79 },
      { x: -48, y: -78 },
      { x: -48, y: -80 },
      { x: -49, y: -80 },
      { x: -49, y: -83 },
    ],
    isolatedCells: [
      { x: -50, y: -83 },
  // cellule isolée
    ],
  },
]

// Zones de la Profondeur de Sufokia
export const PROFONDEUR_DE_SUFOKIA_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Domaine des Trithons)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 19, y: 26 },
      { x: 21, y: 26 },
      { x: 21, y: 28 },
      { x: 19, y: 28 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Ville submergée)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 26 },
      { x: 24, y: 26 },
      { x: 24, y: 28 },
      { x: 22, y: 28 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Plateau de R\'Lyugluglu)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 25, y: 26 },
      { x: 27, y: 26 },
      { x: 27, y: 28 },
      { x: 25, y: 28 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Faille des Trithons)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 19, y: 29 },
      { x: 21, y: 29 },
      { x: 21, y: 31 },
      { x: 19, y: 31 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Ancienne Sufokia)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 29 },
      { x: 24, y: 29 },
      { x: 24, y: 31 },
      { x: 22, y: 31 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Fosse de R\'Lyugluglu)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 25, y: 29 },
      { x: 27, y: 29 },
      { x: 27, y: 31 },
      { x: 25, y: 31 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Tréfonds des Trithons)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 19, y: 32 },
      { x: 21, y: 32 },
      { x: 21, y: 34 },
      { x: 19, y: 34 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Vestiges engloutis)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 32 },
      { x: 24, y: 32 },
      { x: 24, y: 34 },
      { x: 22, y: 34 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Abîme de R\'Lyugluglu)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 25, y: 32 },
      { x: 27, y: 32 },
      { x: 27, y: 34 },
      { x: 25, y: 34 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Palais de Dantinéa)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [

    ],
    isolatedCells: [
      { x: 19, y: 26 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Vaisseau du Capitaine Meno)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [

    ],
    isolatedCells: [
      { x: 24, y: 27 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Profondeurs de Sufokia (Temple de Koutoulou)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [

    ],
    isolatedCells: [
      { x: 27, y: 26 },  // cellule isolée
    ],
  },
]

// Zones de l'Île de Pwak
export const ILE_DE_PWAK_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Île de Pwâk (Carrière Chocolatée)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -4, y: -7 },
      { x: -3, y: -6 },
      { x: -3, y: -4 },
      { x: -2, y: -3 },
      { x: -2, y: -1 },
      { x: -3, y: -1 },
      { x: -4, y: -2 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Île de Pwâk (Jardin à la Crème)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -1, y: -7 },
      { x: 0, y: -7 },
      { x: 0, y: -2 },
      { x: -1, y: -1 },
      { x: -1, y: -3 },
      { x: -2, y: -4 },
      { x: -2, y: -5 },
      { x: -1, y: -6 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Île de Pwâk (Laboratoire des Chocomanciens)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -11 },
      { x: -1, y: -10 },
      { x: -1, y: -8 },
      { x: -2, y: -7 },
      { x: -2, y: -6 },
      { x: -3, y: -7 },
      { x: -3, y: -10 },
    ],
  },
]

// Zones des Entrailles de Brâkmar
export const ENTRAILLES_DE_BRAKMAR_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Brâkmar (Entrailles de Brâkmar)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -25, y: 34 },
      { x: -23, y: 34 },
      { x: -23, y: 35 },
      { x: -22, y: 36 },
      { x: -21, y: 36 },
      { x: -21, y: 37 },
      { x: -22, y: 37 },
      { x: -23, y: 38 },
      { x: -27, y: 38 },
      { x: -27, y: 35 },
      { x: -26, y: 35 },
    ],
    isolatedCells: [
      { x: -25, y: 39 },  // cellule isolée
      { x: -28, y: 37 },  // cellule isolée
    ],
    excludedCells: [
      [{ x: -25, y: 35 }, { x: -24, y: 35 }],  // ligne du haut, sans -26,35 (pleine)
      [{ x: -26, y: 36 }, { x: -24, y: 36 }, { x: -24, y: 37 }, { x: -26, y: 37 }],  // reste du carré
    ],
  },
]

// Zones de la Galerie d'Ereboria
export const GALERIE_D_EREBORIA_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Archipel de Valonia (Galerie d\'Ereboria)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 32, y: -72 },
      { x: 34, y: -72 },
      { x: 33, y: -71 },
      { x: 33, y: -70 },
      { x: 34, y: -69 },
      { x: 35, y: -68 },
      { x: 35, y: -67 },
      { x: 34, y: -66 },
      { x: 34, y: -62 },
      { x: 31, y: -62 },
      { x: 30, y: -63 },
      { x: 31, y: -64 },
      { x: 32, y: -65 },
      { x: 33, y: -65 },
      { x: 34, y: -66 },
      { x: 33, y: -67 },
      { x: 32, y: -68 },
    ],
    isolatedCells: [
      { x: 31, y: -68 },  // cellule isolée
      { x: 31, y: -71 },  // cellule isolée
    ],
  },
]

// Zones de la Pyramide Maudite
export const PYRAMIDE_MAUDITE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Saharach (Pyramide Maudite)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 11, y: -77 },
      { x: 13, y: -77 },
      { x: 13, y: -76 },
      { x: 14, y: -75 },
      { x: 13, y: -74 },
      { x: 12, y: -75 },
      { x: 11, y: -74 },
      { x: 10, y: -75 },
      { x: 10, y: -76 },
    ],
    isolatedCells: [
      { x: 8, y: -78 },  // cellule isolée
      { x: 9, y: -77 },  // cellule isolée
      { x: 9, y: -74 },  // cellule isolée
      { x: 8, y: -76 },  // cellule isolée
      { x: 8, y: -75 },  // cellule isolée
      { x: 10, y: -73 },  // cellule isolée
      { x: 11, y: -72 },  // cellule isolée
      { x: 12, y: -73 },  // cellule isolée
      { x: 12, y: -71 },  // cellule isolée
      { x: 13, y: -72 },  // cellule isolée
      { x: 14, y: -72 },  // cellule isolée
      { x: 14, y: -73 },  // cellule isolée
    ],
  },
]

// Zones de Servitude
export const SERVITUDE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Dimensions des Cavaliers (Galère de Servitude)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 2, y: -3 },
      { x: 4, y: -3 },
      { x: 4, y: -1 },
      { x: 3, y: 0 },
      { x: 0, y: 0 },
      { x: 1, y: -1 },
      { x: 1, y: -2 },
    ],
  }
]

// Zones de Misère
export const MISERE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Dimensions des Cavaliers (Désert de Misère)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -1, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 3 },
      { x: -1, y: 3 },
    ],
    isolatedCells: [
      { x: 0, y: -1 },  // cellule isolée
      { x: 6, y: 0 },  // cellule isolée
      { x: 3, y: 4 },  // cellule isolée
    ],
    excludedCells: [
      [{ x: -1, y: 1 }],  // case vide au milieu
      [{ x: 1, y: 3 }],  // case vide au milieu
    ],
  },
]

// Zones de Corrompu
export const CORROMPU_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Dimensions des Cavaliers (Royaume Corrompu)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 3 },
      { x: 0, y: 3 },

    ],
    isolatedCells: [
      { x: -1, y: 0 },  // cellule isolée
      { x: -1, y: 2 },  // cellule isolée
    ],
  },
]

// Zones de Guerre
export const GUERRE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Dimensions des Cavaliers (Blessure de Guerre)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 0, y: 0 },
      { x: 1, y: -1 },
      { x: 2, y: -2 },
      { x: 3, y: -2 },
      { x: 4, y: -3 },
      { x: 4, y: 0 },
      { x: 3, y: 1 },
      { x: 1, y: 1 },
    ],
  },
]

// Zones d'Ombre
export const OMBRE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Dimensions des Cavaliers (Royaume Corrompu)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [

    ],
    isolatedCells: [
      { x: 5, y: 9 },  // cellule isolée
      { x: 4, y: 9 },  // cellule isolée
      { x: 3, y: 8 },  // cellule isolée
      { x: 3, y: 7 },  // cellule isolée
      { x: 2, y: 6 },  // cellule isolée
      { x: 1, y: 6 },  // cellule isolée
      { x: 1, y: 5 },  // cellule isolée
      { x: 1, y: 4 },  // cellule isolée
      { x: 2, y: 4 },  // cellule isolée
      { x: 3, y: 4 },  // cellule isolée
      { x: 0, y: 4 },  // cellule isolée
      { x: 0, y: 3 },  // cellule isolée
      { x: 1, y: 2 },  // cellule isolée
      { x: 2, y: 2 },  // cellule isolée
      { x: 3, y: 1 },  // cellule isolée
    ],
  },
]

// Zones de Wukin-et-Wukang
export const WUKIN_ET_WUKANG_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Wukin et Wukang (Royaume d\'encre',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -2, y: -5 },
      { x: 0, y: -5 },
      { x: 1, y: -4 },
      { x: 1, y: -1 },
      { x: -2, y: -1 },
      { x: -3, y: 0 },
      { x: -3, y: 2 },
      { x: -4, y: 1 },
      { x: -4, y: -2 },
      { x: -3, y: -3 },
      { x: -2, y: -4 },
    ],
    isolatedCells: [
      { x: -3, y: 3 },  // cellule isolée
    ],
  },
  {
    id: 'zone-principale',
    name: 'Wukin et Wukang (Royaume de papier',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 2, y: -3 },
      { x: 3, y: -2 },
      { x: 3, y: 1 },
      { x: 2, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: -1, y: 4 },
      { x: -2, y: 3 },
      { x: -2, y: 0 },
      { x: 2, y: 0 },
    ],
    isolatedCells: [
      { x: 2, y: -4 },  // cellule isolée
    ],
  },
]

// Zones de la Base Abyssale
export const BASE_ABYSSALE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Baie de Sufokia (Fouilles sufokienne)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 25, y: 12 },
      { x: 21, y: 12 },
      { x: 21, y: 13 },
    ],
    isolatedCells: [
      { x: 21, y: 14 },
      { x: 22, y: 14 },
      { x: 22, y: 15 },
      { x: 23, y: 26 },
    ],
  },
  {
    id: 'zone-principale',
    name: 'Baie de Sufokia (Salles des Embruns)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 17 },
      { x: 23, y: 18 },
      { x: 24, y: 19 },
      { x: 23, y: 20 },
      { x: 22, y: 21 },
      { x: 21, y: 20 },
      { x: 20, y: 19 },
      { x: 21, y: 18 },
    ],
    
    excludedCells: [
      [{ x: 22, y: 18 }],  // case vide au milieu
      [{ x: 21, y: 19 }],  // case vide au milieu
    ],
  },
  {
    id: 'zone-principale',
    name: 'Baie de Sufokia (Salles des Courants)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 23 },
      { x: 23, y: 24 },
      { x: 24, y: 25 },
      { x: 23, y: 26 },
      { x: 22, y: 27 },
      { x: 21, y: 26 },
      { x: 20, y: 25 },
      { x: 21, y: 24 },
    ],
    isolatedCells: [
      { x: 23, y: 27 },  // cellule isolée
      { x: 24, y: 26 },  // cellule isolée
      { x: 23, y: 30 },
    ],
    excludedCells: [
      [{ x: 23, y: 26 }],  // case vide au milieu
      [{ x: 23, y: 25 }],  // case vide au milieu
      [{ x: 22, y: 24 }],  // case vide au milieu
    ],
  },
  {
    id: 'zone-principale',
    name: 'Baie de Sufokia (Salles des Abîmes)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: 22, y: 29 },
      { x: 21, y: 30 },
      { x: 22, y: 31 },
      { x: 23, y: 31 },
      { x: 22, y: 32 },
    ],
    isolatedCells: [
      { x: 24, y: 31 },  // cellule isolée
      { x: 24, y: 32 },  // cellule isolée
      { x: 23, y: 33 },  // cellule isolée
      { x: 22, y: 34 },  // cellule isolée
      { x: 21, y: 33 },  // cellule isolée
      { x: 20, y: 32 },  // cellule isolée
    ],
  },
]

// Zones du Village de la Canopée
export const VILLAGE_DE_LA_CANOPEE_ZONES: Zone[] = [
  {
    id: 'zone-principale',
    name: 'Île d\'Otomaï (Village de la Canopée)',
    color: 'rgba(100, 150, 255, 0.3)',
    borderColor: 'rgba(100, 150, 255, 0.8)',
    points: [
      { x: -57, y: 13 },
      { x: -49, y: 13 },
      { x: -49, y: 21 },
      { x: -57, y: 21 },
    ],
    isolatedCells: [
      { x: -57, y: 11 },  // cellule isolée
      { x: -57, y: 12 },  // cellule isolée
      { x: -51, y: 12 },  // cellule isolée
      { x: -52, y: 23 },  // cellule isolée
      { x: -52, y: 22 },  // cellule isolée
      { x: -58, y: 21 },  // cellule isolée
      { x: -58, y: 18 },  // cellule isolée
    ],
    excludedCells: [
      [{ x: -53, y: 13 },{ x: -53, y: 15 },],
      [{ x: -57, y: 17 },{ x: -55, y: 17 },],
      [{ x: -53, y: 19 },{ x: -53, y: 21 },],
      [{ x: -51, y: 17 },{ x: -49, y: 17 },],
      [{ x: -51, y: 14 },],
      [{ x: -51, y: 15 },],
      [{ x: -50, y: 15 },]
    ],
  },
]
