import type { Dungeon } from '../types'
import {
  MAIN_WORLD_ZONES,
  INCARNAM_ZONES,
  ENUTROSOR_ZONES,
  OSAVORA_ZONES,
  SRAMBAD_ZONES,
  XELORIUM_ZONES,
  ECAFLIPUS_ZONES,
  CAUCHEMAR_ZONES,
  CANAUX_MEPHITIQUES_ZONES,
} from './zones'

export interface LevelRange {
  label: string
  min: number
  max: number
}

export const LEVEL_RANGES: LevelRange[] = [
  { label: 'Niveau 1 - 50', min: 1, max: 50 },
  { label: 'Niveau 51 - 100', min: 51, max: 100 },
  { label: 'Niveau 101 - 150', min: 101, max: 150 },
  { label: 'Niveau 151 - 190', min: 151, max: 190 },
  { label: 'Niveau 191 - 200', min: 191, max: 200 },
]

export const COORD_STEP = 10
export const ZOOM_FACTOR = 0.2

export const DUNGEON_ICON_SIZE = 1.5 // Taille de l'icône en cellules de grille

export interface Zone {
  id: string
  name: string
  color: string // Couleur de remplissage (ex: 'rgba(255, 0, 0, 0.3)')
  borderColor?: string // Couleur de bordure optionnelle
  points: { x: number; y: number }[] // Coordonnées du polygone en coordonnées monde
  isolatedCells?: { x: number; y: number }[] // Cellules isolées non reliées au polygone
  excludedCells?: { x: number; y: number }[][] // Trous: formes à exclure (même règles que `points` — 1 point = case, 2 = ligne, 3+ = polygone rempli)
}

export interface GameMap {
  id: string
  name: string
  image: string
  gridCols: number
  gridRows: number
  worldBounds: {
    minX: number
    maxX: number
    minY: number
    maxY: number
  }
  minZoom: number
  maxZoom: number
  canvasWidth: number
  canvasHeight: number
  zones?: Zone[] // Zones optionnelles pour chaque map
  gridOffsetX?: number // Décalage visuel des lignes de grille, en fraction de case (0-1). N'affecte QUE le rendu des lignes, pas les coordonnées/zones/donjons
  gridOffsetY?: number // Décalage visuel des lignes de grille, en fraction de case (0-1). N'affecte QUE le rendu des lignes, pas les coordonnées/zones/donjons
}

export const GAME_MAPS: GameMap[] = [
  {
    id: 'main',
    name: 'Monde des douzes',
    image: '/mapBG.png',
    gridCols: 142,
    gridRows: 160,
    worldBounds: { minX: -93, maxX: 50, minY: -100, maxY: 61 },
    minZoom: 1,
    maxZoom: 6,
    canvasWidth: 1200,
    canvasHeight: 1000,
    zones: MAIN_WORLD_ZONES,
  },
  {
    id: 'incarnam',
    name: 'Incarnam',
    image: '/incarnam.png',
    gridCols: 13,
    gridRows: 16,
    worldBounds: { minX: -5, maxX: 7, minY: -8, maxY: 7 },
    minZoom: 1,
    maxZoom: 2,
    canvasWidth: 800,
    canvasHeight: 700,
    zones: INCARNAM_ZONES,
  },
  {
    id: 'enutrosor',
    name: 'Dimension Enutrosor',
    image: '/enutrosor.png',
    gridCols: 20,
    gridRows: 17,
    worldBounds: { minX: -13, maxX: 6, minY: -13, maxY: 3 },
    minZoom: 1,
    maxZoom: 2,
    canvasWidth: 1300,
    canvasHeight: 850,
    zones: ENUTROSOR_ZONES,
  },
  {
    id: 'osavora',
    name: 'Dimension Osavora',
    image: '/osavora.png',
    gridCols: 42,
    gridRows: 53,
    worldBounds: { minX: -8, maxX: 34, minY: -13, maxY: 40 },
    minZoom: 1,
    maxZoom: 4,
    canvasWidth: 1000,
    canvasHeight: 950,
    zones: OSAVORA_ZONES,
  },
  {
    id: 'srambad',
    name: 'Dimension Srambad',
    image: '/srambad.png',
    gridCols: 23,
    gridRows: 25,
    worldBounds: { minX: -5, maxX: 17, minY: -9, maxY: 15 },
    minZoom: 1,
    maxZoom: 4,
    canvasWidth: 1000,
    canvasHeight: 850,
    zones: SRAMBAD_ZONES,
  },
  {
    id: 'xelorium',
    name: 'Dimension Xelorium',
    image: '/xelorium.png',
    gridCols: 20,
    gridRows: 23,
    worldBounds: { minX: -6, maxX: 13, minY: -10, maxY: 12 },
    minZoom: 1,
    maxZoom: 4,
    canvasWidth: 1000,
    canvasHeight: 850,
    zones: XELORIUM_ZONES,
  },
  {
    id: 'ecaflipus',
    name: 'Dimension Ecaflipus',
    image: '/ecaflipus.png',
    gridCols: 50,
    gridRows: 50,
    worldBounds: { minX: -20, maxX: 20, minY: -20, maxY: 20 },
    minZoom: 1,
    maxZoom: 4,
    canvasWidth: 1000,
    canvasHeight: 1000,
    zones: ECAFLIPUS_ZONES,
  },
  {
    id: 'cauchemar',
    name: 'Cauchemar',
    image: '/cauchemar.png',
    gridCols: 11,
    gridRows: 12,
    worldBounds: { minX: -3, maxX: 7, minY: -3, maxY: 8 },
    minZoom: 1,
    maxZoom: 3,
    canvasWidth: 1000,
    canvasHeight: 800,
    zones: CAUCHEMAR_ZONES,
  },
  {
    id: 'canaux-mephitiques',
    name: 'Canaux Méphitiques',
    image: '/Canaux-Méphitiques.png',
    gridCols: 11,
    gridRows: 12,
    worldBounds: { minX: -38, maxX: -28, minY: -61, maxY: -50 },
    minZoom: 1,
    maxZoom: 2,
    canvasWidth: 1000,
    canvasHeight: 750,
    zones: CANAUX_MEPHITIQUES_ZONES,
  },
  {
    id: 'caverne-des-fungus',
    name: 'Caverne des Fungus',
    image: '/Caverne-des-Fungus.png',
    gridCols: 10,
    gridRows: 11,
    worldBounds: { minX: -16, maxX: -6, minY: 26, maxY: 37 },
    minZoom: 1,
    maxZoom: 2,
    canvasWidth: 1000,
    canvasHeight: 750,
    gridOffsetX: 0.8,
    gridOffsetY: 0.5,
  },
]

export const DUNGEONS: Dungeon[] = [
  // Niveau 20
  { id: 1, name: 'Château Ensablé', level: 20, coord: { x: 13, y: -28 } },
  { id: 2, name: 'Grange du Tournesol Affamé', level: 20, coord: { x: 7, y: -24 } },

  // Niveau 30
  { id: 3, name: 'Cour du Bouftou Royal', level: 30, coord: { x: 2, y: -34 } },

  // Niveau 40
  { id: 4, name: 'Cache de Kankreblath', level: 40, coord: { x: 3, y: -17 } },
  { id: 5, name: 'Akadémie des Gobs', level: 40, coord: { x: -5, y: 3 } },
  { id: 6, name: 'Donjon des Scarafeuilles', level: 40, coord: { x: 1, y: 26 } },
  { id: 7, name: 'Donjon des Squelettes', level: 40, coord: { x: 10, y: 15 } },
  { id: 8, name: 'Donjon des Tofus', level: 40, coord: { x: 5, y: 6 } },
  { id: 9, name: 'Maison Fantôme', level: 40, coord: { x: -13, y: -41 } },

  // Niveau 50
  { id: 10, name: 'Donjon des Bworks', level: 50, coord: { x: -5, y: 10 } },
  { id: 11, name: 'Donjon des Forgerons', level: 50, coord: { x: 13, y: 21 } },
  { id: 12, name: 'Donjon des Larves', level: 50, coord: { x: -2, y: -5 } },
  { id: 13, name: 'Nid du Kwakwa', level: 50, coord: { x: -4, y: -7 } },
  { id: 14, name: 'Refuge Sylvestre', level: 50, coord: { x: 40, y: -84 } },
  { id: 15, name: 'Grotte Hesque', level: 50, coord: { x: -59, y: 15 } },
  
  // Niveau 60-65
  { id: 16, name: 'Clos des Blops', level: 60, coord: { x: -7, y: -43 } },
  { id: 17, name: 'Château du Wa Wabbit', level: 60, coord: { x: 24, y: -13 } },
  //{ id: 18, name: 'Gelaxième dimension', level: 60, coord: { x: , y:  } },
  { id: 19, name: 'Village Kanniboul', level: 60, coord: { x: 29, y: 9 } },
  { id: 20, name: 'Cale de l\'Arche d\'Otomaï', level: 60, coord: { x: -55, y: -4 } },

  // Niveau 70
  { id: 21, name: 'Pitons Rocheux des Craqueleurs', level: 70, coord: { x: -3, y: -7 } },
  { id: 22, name: 'Laboratoire de Brumen Tinctorias', level: 70, coord: { x: -27, y: 17 } },
  { id: 23, name: 'Épreuve de Draegnerys', level: 70, coord: { x: -4, y: 29 } },

  // Niveau 80
  { id: 24, name: 'Cimetière des Mastodontes', level: 80, coord: { x: 19, y: -61 } },
  { id: 25, name: 'Terrier du Wa Wabbit', level: 80, coord: { x: 28, y: -12 } },

  // Niveau 90
  { id: 26, name: 'Chapiteau des Magik Riktus', level: 90, coord: { x: -22, y: 12 } },
  { id: 27, name: 'Bateau du Chouque', level: 90, coord: { x: 33, y: 3 } },
  { id: 28, name: 'Domaine Ancestral', level: 90, coord: { x: -9, y: -14 } },
  { id: 29, name: 'Antre de la Reine Nyée', level: 90, coord: { x: -6, y: -15 } },

  // Niveau 100-110
  { id: 30, name: 'Théâtre de Dramak', level: 100, coord: { x: 21, y: 7 } },
  { id: 31, name: 'Tanière du Meulou', level: 100, coord: { x: -23, y: 0 } },
  { id: 32, name: 'Antre du Dragon Cochon', level: 100, coord: { x: -1, y: 33 } },
  { id: 33, name: 'Arbre de Moon', level: 100, coord: { x: 29, y: 6 } },
  { id: 34, name: 'Antre du Koulosse', level: 100, coord: { x: -17, y: 8 } },
  { id: 35, name: 'Caverne du Koulosse', level: 100, coord: { x: -17, y: 8 } },
  { id: 36, name: 'Repaire du Kharnozor', level: 100, coord: { x: -3, y: 25 } },
  { id: 37, name: 'Sousouricière du Rat Noir', level: 110, coord: { x: -25, y: 39 } }, //entre egout
  { id: 38, name: 'Goulet du Rasboul', level: 110, coord: { x: -51, y: 9 } },
  { id: 39, name: 'Bibliothèque du Maître Corbac', level: 110, coord: { x: -15, y: -62 } },
  //{ id: 40, name: 'Garde-manger du Rat Blanc', level: 110, coord: { x: -33, y: -53 } },
  { id: 41, name: 'Bambusaie de Damadrya', level: 110, coord: { x: 26, y: -30 } },
  
  // Niveau 120
  { id: 42, name: 'Repaire de Skeunk', level: 120, coord: { x: -20, y: 10 } },
  { id: 43, name: 'Centre du labyrinthe du Minotoror', level: 120, coord: { x: -42, y: -17 } },
  { id: 44, name: 'Tofulailler Royal', level: 120, coord: { x: 5, y: 6 } },
  { id: 45, name: 'Antre de Crocabulia', level: 120, coord: { x: -2, y: 25 } },
  { id: 46, name: 'Serre du Royalmouth', level: 100, coord: { x: -84, y: -49 } },
  { id: 47, name: 'Antre du Blop Multicolore Royal', level: 120, coord: { x: -7, y: -43 } },
  
  // Niveau 130
  { id: 48, name: 'Volière de la Haute Truche', level: 130, coord: { x: -10, y: -44 } },
  { id: 49, name: 'Atelier du Tanukouï San', level: 130, coord: { x: 26, y: -24 } },
  { id: 50, name: 'Vallée de la Dame des eaux', level: 130, coord: { x: 22, y: -24 } },
  { id: 51, name: 'Caverne d\'El Piko', level: 130, coord: { x: 15, y: -65 } },
  
  // Niveau 140
  { id: 52, name: 'Laboratoire du Tynril', level: 140, coord: { x: -53, y: 20 } },
  { id: 53, name: 'Excavation du Mansot Royal', level: 140, coord: { x: -64, y: -55 } },
  { id: 54, name: 'Clairière du Chêne Mou', level: 140, coord: { x: -14, y: -13 } },
  { id: 55, name: 'Dojo du Vent', level: 140, coord: { x: 20, y: -37 } },
  { id: 56, name: 'Fabrique de foux d\'artifice', level: 140, coord: { x: 14, y: -32 } },

  // Niveau 150-190
  { id: 57, name: 'Épave du Grolandais violent', level: 150, coord: { x: -60, y: -84 } },
  { id: 58, name: 'Tertre du long sommeil', level: 150, coord: { x: -3, y: 19 } },
  { id: 59, name: 'Repaire de Sphincter Cell', level: 150, coord: { x: 3, y: -6 } },
  { id: 60, name: 'Salle du Minotot', level: 160, coord: { x: -42, y: -17 } },
  { id: 61, name: 'Canopée du Kimbo', level: 160, coord: { x: -54, y: 16 } },
  { id: 62, name: 'Tombe du Shogun Tofugawa', level: 160, coord: { x: 36, y: -44 } },
  { id: 63, name: 'Grotte de Kanigroula', level: 160, coord: { x: -5, y: -54 } },
  { id: 64, name: 'Hypogée de l\'Obsidiantre', level: 160, coord: { x: -71, y: -83 } },
  { id: 65, name: 'Tanière Givrefoux', level: 170, coord: { x: -76, y: -75 } },
  { id: 66, name: 'Demeure des Esprits', level: 170, coord: { x: 39, y: -44 } },
  { id: 67, name: 'Temple du Grand Ougah', level: 180, coord: { x: -9, y: 29 } },
  { id: 68, name: 'Antre du Kralamoure Géant', level: 180, coord: { x: -60, y: -8 } },
  { id: 69, name: 'Antre du Korriandre', level: 180, coord: { x: -73, y: -69 } },
  { id: 70, name: 'Grotte du Bworker', level: 180, coord: { x: -15, y: 14 } },
  { id: 71, name: 'Bastion des Marteaux-Aigris', level: 190, coord: { x: 33, y: -70 } }, //entrée de la zone
  { id: 72, name: 'Antichambre des Gloursons', level: 190, coord: { x: -63, y: -75 } },
  { id: 73, name: 'Caverne du Kolosso', level: 190, coord: { x: -61, y: -69 } },
  { id: 74, name: 'Camp du Comte Razof', level: 190, coord: { x: -68, y: 30 } },
  { id: 75, name: 'Mine abandonnée de Sakaï', level: 190, coord: { x: -52, y: -45 } },

  // Niveau 200
  { id: 76, name: 'Tour de Solar', level: 200, coord: { x: -31, y: 15 } },
  { id: 77, name: 'Chambre de Tal Kasha', level: 200, coord: { x: 12, y: -77 } },
  { id: 78, name: 'Chambre des maléfices', level: 200, coord: { x: 29, y: -88 } },
  { id: 79, name: 'Ventre de la Baleine', level: 200, coord: { x: -85, y: -59 } },
  { id: 80, name: 'Manoir des Katrepat', level: 200, coord: { x: -14, y: 25 } },
  { id: 81, name: 'Brasserie du roi Dazak', level: 200, coord: { x: -62, y: -70 } },
  { id: 82, name: 'Rituel de Kabahal', level: 200, coord: { x: 43, y: -57 } },

  //incarnam
  { id: 83, name: 'Crypte de Kardorim', level: 10, coord: { x: 5, y: -1 }, mapId: 'incarnam' },

  //enutrosor
  { id: 83, name: 'Fabrique de Malléfisk', level: 100, coord: { x: -6, y: -2 }, mapId: 'enutrosor' },
  { id: 83, name: 'Galerie du phossile', level: 150, coord: { x: -5, y: -5 }, mapId: 'enutrosor' },
  { id: 83, name: 'Palais du roi Nidas', level: 200, coord: { x: -2, y: -3 }, mapId: 'enutrosor' },

  //cauchemar
  { id: 83, name: 'Bataille de l\'Aurore Pourpre', level: 200, coord: { x: 1, y: 0 }, mapId: 'cauchemar' },

  //osavora
  { id: 83, name: 'Poste de contrôle du Supervizoeuf', level: 170, coord: { x: 24, y: 23 }, mapId: 'osavora' },
  { id: 83, name: 'Breuil du Vénérable', level: 200, coord: { x: 6, y: 9 }, mapId: 'osavora' },
  { id: 83, name: 'Autel de la Déchireuse', level: 200, coord: { x: 12, y: 2 }, mapId: 'osavora' },
  { id: 83, name: 'Gargandyas', level: 200, coord: { x: 17, y: 8 }, mapId: 'osavora' },

  //xelorium
  { id: 83, name: 'Mégalithe de Fraktale', level: 120, coord: { x: 7, y: 3 }, mapId: 'xelorium' },
  { id: 83, name: 'Horologium de XLII', level: 170, coord: { x: 7, y: -2 }, mapId: 'xelorium' },
  { id: 83, name: 'Œil de Vortex', level: 200, coord: { x: 7, y: -7 }, mapId: 'xelorium' },

  //srambad
  { id: 83, name: 'Ring du Capitaine Ekarlatte', level: 130, coord: { x: 6, y: 3 }, mapId: 'srambad' },
  { id: 83, name: 'Cave du Toxoliath', level: 180, coord: { x: 8, y: 8 }, mapId: 'srambad' },
  { id: 83, name: 'Trône de la Cour Sombre', level: 200, coord: { x: 8, y: -4 }, mapId: 'srambad' },

  //canaux-mephitiques
  { id: 40, name: 'Garde-manger du Rat Blanc', level: 110, coord: { x: -34, y: -59 }, mapId: 'canaux-mephitiques' },

  //caverne-des-fungus
  { id: 67, name: 'Temple du Grand Ougah', level: 180, coord: { x: -9, y: 29 }, mapId: 'caverne-des-fungus' },

]
