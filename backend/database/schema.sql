-- Schema pour la gestion des compositions de donjons

-- Table des donjons
CREATE TABLE IF NOT EXISTS dungeons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level INT NOT NULL,
    coord_x INT NOT NULL,
    coord_y INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des compositions d'équipe pour chaque donjon
CREATE TABLE IF NOT EXISTS compositions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dungeon_id INT NOT NULL,
    party_size INT NOT NULL CHECK (party_size >= 1 AND party_size <= 8),
    title VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (dungeon_id) REFERENCES dungeons(id) ON DELETE CASCADE
);

-- Table des détails de composition (classes de personnages)
CREATE TABLE IF NOT EXISTS composition_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    composition_id INT NOT NULL,
    position INT NOT NULL,
    class_name VARCHAR(50) NOT NULL,
    role VARCHAR(50),
    notes TEXT,
    FOREIGN KEY (composition_id) REFERENCES compositions(id) ON DELETE CASCADE
);

-- Table des équipements/sets recommandés
CREATE TABLE IF NOT EXISTS composition_equipment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    composition_detail_id INT NOT NULL,
    equipment_name VARCHAR(100) NOT NULL,
    equipment_type VARCHAR(50),
    is_required BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (composition_detail_id) REFERENCES composition_details(id) ON DELETE CASCADE
);

-- Index pour optimiser les requêtes
CREATE INDEX idx_dungeons_level ON dungeons(level);
CREATE INDEX idx_compositions_dungeon ON compositions(dungeon_id);
CREATE INDEX idx_compositions_party_size ON compositions(party_size);
CREATE INDEX idx_composition_details_composition ON composition_details(composition_id);

-- Insertion des donjons existants
INSERT INTO dungeons (name, level, coord_x, coord_y) VALUES
    ('Antre de la Reine Nyée', 90, -6, -15),
    ('Cimetière des Mastodontes', 80, 19, -61),
    ('Akadémie des Gobs', 40, -5, 3)
ON DUPLICATE KEY UPDATE name=name;
