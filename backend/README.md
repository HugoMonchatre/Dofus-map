# Dofus Map Backend API

Backend API pour gérer les compositions de donjons Dofus.

## Installation

1. Installer les dépendances:
```bash
npm install
```

2. Configurer la base de données:
   - Créer une base de données MySQL nommée `dofus_map`
   - Copier `.env.example` vers `.env`
   - Modifier les paramètres de connexion dans `.env`

3. Initialiser la base de données:
```bash
npm run init-db
```

4. (Optionnel) Charger les données d'exemple:
```bash
mysql -u root -p dofus_map < database/sample_data.sql
```

5. Démarrer le serveur:
```bash
# Production
npm start

# Développement (avec auto-reload)
npm run dev
```

Le serveur sera disponible sur `http://localhost:3001`

## Configuration (.env)

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

## API Endpoints

### Donjons

#### GET /api/dungeons
Récupère tous les donjons

**Réponse:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Antre de la Reine Nyée",
      "level": 90,
      "coord": { "x": -6, "y": -15 }
    }
  ]
}
```

#### GET /api/dungeons/:id
Récupère un donjon spécifique

#### POST /api/dungeons
Crée un nouveau donjon

**Body:**
```json
{
  "name": "Nom du donjon",
  "level": 100,
  "coord": { "x": 10, "y": 20 }
}
```

#### PUT /api/dungeons/:id
Met à jour un donjon

#### DELETE /api/dungeons/:id
Supprime un donjon

### Compositions

#### GET /api/compositions/dungeon/:dungeonId?partySize=X
Récupère toutes les compositions pour un donjon

**Paramètres:**
- `dungeonId` (path): ID du donjon
- `partySize` (query, optionnel): Filtre par nombre de personnages (1-8)

**Réponse:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "dungeon_id": 1,
      "party_size": 4,
      "title": "Compo stuff terre",
      "description": "Composition optimale pour 4 joueurs",
      "dungeon_name": "Antre de la Reine Nyée",
      "created_by_username": "admin",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### GET /api/compositions/:id
Récupère une composition complète avec tous ses détails

**Réponse:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "dungeon_id": 1,
    "party_size": 4,
    "title": "Compo stuff terre",
    "description": "Composition optimale",
    "details": [
      {
        "id": 1,
        "position": 1,
        "class_name": "Iop",
        "role": "DPS",
        "notes": "Focus dégâts terre",
        "equipment": "Set Bourbassingue,Dofus Turquoise"
      }
    ]
  }
}
```

#### POST /api/compositions
Crée une nouvelle composition

**Body:**
```json
{
  "dungeonId": 1,
  "partySize": 4,
  "title": "Ma composition",
  "description": "Description optionnelle",
  "details": [
    {
      "position": 1,
      "className": "Iop",
      "role": "DPS",
      "notes": "Notes optionnelles",
      "equipment": [
        {
          "name": "Set Bourbassingue",
          "type": "armor",
          "required": true
        }
      ]
    }
  ]
}
```

#### PUT /api/compositions/:id
Met à jour une composition

**Body:** Même structure que POST

#### DELETE /api/compositions/:id
Supprime une composition

### Health Check

#### GET /api/health
Vérifie que le serveur fonctionne

**Réponse:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Structure de la base de données

### Tables principales:
- `dungeons`: Liste des donjons
- `compositions`: Compositions d'équipe pour chaque donjon
- `composition_details`: Détails de chaque personnage dans une composition (classe, rôle)
- `composition_equipment`: Équipements recommandés pour chaque personnage

## Exemples d'utilisation

### Créer une composition

```bash
curl -X POST http://localhost:3001/api/compositions \
  -H "Content-Type: application/json" \
  -d '{
    "dungeonId": 1,
    "partySize": 4,
    "title": "Compo stuff terre",
    "description": "Optimisée pour les dégâts terre",
    "details": [
      {
        "position": 1,
        "className": "Iop",
        "role": "DPS",
        "notes": "Focus dégâts",
        "equipment": [
          {"name": "Set Bourbassingue", "type": "armor", "required": true}
        ]
      }
    ]
  }'
```

### Récupérer les compositions pour un donjon

```bash
curl http://localhost:3001/api/compositions/dungeon/1?partySize=4
```

## Développement

Le projet utilise:
- **Express** pour le serveur HTTP
- **MySQL2** pour la connexion à la base de données
- **dotenv** pour la gestion des variables d'environnement
- **cors** pour gérer les requêtes cross-origin

## Notes

- Pas d'authentification (version de test simplifiée)
- Les cascades de suppression sont activées (supprimer un donjon supprime ses compositions)
- Les données d'exemple sont disponibles dans `database/sample_data.sql`
