# Backend Simple - Dofus Map

Backend ultra-simple avec stockage JSON (pas de base de données).

## Installation

```bash
npm install
```

## Démarrage

```bash
# Mode production
npm start

# Mode développement (avec auto-reload)
npm run dev
```

Le serveur sera disponible sur `http://localhost:3001`

## C'est tout!

Pas de configuration, pas de base de données, juste `npm install` et `npm start`.

## API

Mêmes endpoints que le backend MySQL:

- `GET /api/dungeons` - Liste des donjons
- `GET /api/compositions/dungeon/:id?partySize=X` - Compositions par donjon
- `GET /api/compositions/:id` - Détails d'une composition
- `POST /api/compositions` - Créer une composition
- `PUT /api/compositions/:id` - Modifier une composition
- `DELETE /api/compositions/:id` - Supprimer une composition

## Données

Les données sont stockées dans le dossier `data/`:
- `dungeons.json` - Liste des donjons
- `compositions.json` - Compositions d'équipe

Vous pouvez les modifier directement si besoin.
