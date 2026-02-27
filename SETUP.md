# Installation et Configuration

Ce projet contient deux parties : un backend API et un frontend React.

## Backend (API)

### 1. Installation

```bash
cd backend
npm install
```

### 2. Configuration de la base de données

1. Créer une base de données MySQL :
```sql
CREATE DATABASE dofus_map;
```

2. Copier le fichier `.env.example` vers `.env` :
```bash
cp .env.example .env
```

3. Modifier les paramètres de connexion dans `.env` :
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=dofus_map
DB_PORT=3306

PORT=3001
NODE_ENV=development

CORS_ORIGIN=http://localhost:5173
```

### 3. Initialiser la base de données

```bash
npm run init-db
```

### 4. (Optionnel) Charger les données d'exemple

```bash
mysql -u root -p dofus_map < database/sample_data.sql
```

### 5. Démarrer le serveur backend

```bash
# Mode développement (avec auto-reload)
npm run dev

# Mode production
npm start
```

Le backend sera disponible sur `http://localhost:3001`

## Frontend (Map App)

### 1. Installation

```bash
cd map-app
npm install
```

### 2. Configuration

1. Copier le fichier `.env.example` vers `.env` :
```bash
cp .env.example .env
```

2. Vérifier que l'URL de l'API est correcte dans `.env` :
```env
VITE_API_URL=http://localhost:3001/api
```

### 3. Démarrer l'application

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## Utilisation

### Frontend

1. Ouvrez `http://localhost:5173` dans votre navigateur
2. Utilisez les filtres de niveau sur la gauche
3. Cliquez sur un donjon sur la carte pour ouvrir la modale
4. Sélectionnez un nombre de joueurs (4, 5, 6, 7 ou 8)
5. Choisissez une composition pour voir les détails

### Backend - Endpoints API

Tous les endpoints sont documentés dans `backend/README.md`

Principaux endpoints :
- `GET /api/dungeons` - Liste tous les donjons
- `GET /api/compositions/dungeon/:dungeonId?partySize=X` - Compositions pour un donjon
- `GET /api/compositions/:id` - Détails d'une composition
- `POST /api/compositions` - Créer une composition
- `DELETE /api/compositions/:id` - Supprimer une composition

## Structure du projet

```
.
├── backend/                    # Backend API Node.js/Express
│   ├── database/
│   │   ├── schema.sql         # Schéma de base de données
│   │   └── sample_data.sql    # Données d'exemple
│   ├── src/
│   │   ├── config/            # Configuration (DB)
│   │   ├── models/            # Modèles de données
│   │   ├── routes/            # Routes API
│   │   └── scripts/           # Scripts utilitaires
│   └── README.md              # Documentation détaillée de l'API
│
└── map-app/                    # Frontend React
    ├── src/
    │   ├── components/        # Composants React
    │   ├── services/          # Services API
    │   ├── types/             # Types TypeScript
    │   ├── utils/             # Fonctions utilitaires
    │   └── constants/         # Constantes
    └── public/                # Assets statiques

```

## Notes importantes

- Assurez-vous que le backend soit démarré **avant** le frontend
- Le backend doit tourner sur le port 3001 pour que le frontend puisse s'y connecter
- Les données d'exemple créent 4 compositions de test pour différents donjons
- Pour l'instant, le frontend utilise `dungeonId = 1` en dur (TODO à améliorer)

## Développement

### Ajouter une composition via l'API

```bash
curl -X POST http://localhost:3001/api/compositions \
  -H "Content-Type: application/json" \
  -d '{
    "dungeonId": 1,
    "partySize": 4,
    "title": "Ma composition",
    "description": "Description de ma composition",
    "details": [
      {
        "position": 1,
        "className": "Iop",
        "role": "DPS",
        "notes": "Focus dégâts"
      }
    ]
  }'
```

### Tester l'API

```bash
# Health check
curl http://localhost:3001/api/health

# Liste des donjons
curl http://localhost:3001/api/dungeons

# Compositions pour le donjon 1 avec 4 joueurs
curl http://localhost:3001/api/compositions/dungeon/1?partySize=4
```
