import type { Dungeon } from '../types'
import {
  MAIN_WORLD_ZONES,
  INCARNAM_ZONES,
  ENUTROSOR_ZONES,
  SRAMBAD_ZONES,
  XELORIUM_ZONES,
  ECAFLIPUS_ZONES,
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

export const WORLD_BOUNDS = {
  minX: -93,
  maxX: 50,
  minY: -100,
  maxY: 61,
}

export const GRID_COLS = 142
export const GRID_ROWS = 160
export const COORD_STEP = 10
export const ZOOM_FACTOR = 0.2
export const MIN_ZOOM = 1
export const MAX_ZOOM = 6

export const CANVAS_WIDTH = 1200
export const CANVAS_HEIGHT = 1000

export const DUNGEON_ICON_SIZE = 1.5 // Taille de l'icône en cellules de grille

export interface Zone {
  id: string
  name: string
  color: string // Couleur de remplissage (ex: 'rgba(255, 0, 0, 0.3)')
  borderColor?: string // Couleur de bordure optionnelle
  points: { x: number; y: number }[] // Coordonnées du polygone en coordonnées monde
  isolatedCells?: { x: number; y: number }[] // Cellules isolées non reliées au polygone
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
  zones?: Zone[] // Zones optionnelles pour chaque map
}

export const GAME_MAPS: GameMap[] = [
  {
    id: 'main',
    name: 'Monde des douzes',
    image: '/mapBG.png',
    gridCols: 142,
    gridRows: 160,
    worldBounds: { minX: -93, maxX: 50, minY: -100, maxY: 61 },
    zones: MAIN_WORLD_ZONES,
  },
  {
    id: 'incarnam',
    name: 'Incarnam',
    image: '/incarnam.png',
    gridCols: 30,
    gridRows: 30,
    worldBounds: { minX: 0, maxX: 15, minY: -5, maxY: 10 },
    zones: INCARNAM_ZONES,
  },
  {
    id: 'enutrosor',
    name: 'Dimension Enutrosor',
    image: '/enutrosor.png',
    gridCols: 50,
    gridRows: 50,
    worldBounds: { minX: -20, maxX: 20, minY: -20, maxY: 20 },
    zones: ENUTROSOR_ZONES,
  },
  {
    id: 'srambad',
    name: 'Dimension Srambad',
    image: '/srambad.png',
    gridCols: 50,
    gridRows: 50,
    worldBounds: { minX: -20, maxX: 20, minY: -20, maxY: 20 },
    zones: SRAMBAD_ZONES,
  },
  {
    id: 'xelorium',
    name: 'Dimension Xelorium',
    image: '/xelorium.png',
    gridCols: 50,
    gridRows: 50,
    worldBounds: { minX: -20, maxX: 20, minY: -20, maxY: 20 },
    zones: XELORIUM_ZONES,
  },
  {
    id: 'ecaflipus',
    name: 'Dimension Ecaflipus',
    image: '/ecaflipus.png',
    gridCols: 50,
    gridRows: 50,
    worldBounds: { minX: -20, maxX: 20, minY: -20, maxY: 20 },
    zones: ECAFLIPUS_ZONES,
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
  { id: 40, name: 'Garde-manger du Rat Blanc', level: 110, coord: { x: -33, y: -53 } },
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
]
