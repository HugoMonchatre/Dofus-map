-- Exemples de compositions pour tester l'API

-- Compositions pour "Antre de la Reine Nyée" (dungeon_id = 1, niveau 90)

-- Composition 4 joueurs
INSERT INTO compositions (dungeon_id, party_size, title, description) VALUES
(1, 4, 'Compo stuff terre classique', 'Composition optimale pour 4 joueurs avec focus dégâts terre');

SET @comp1_id = LAST_INSERT_ID();

INSERT INTO composition_details (composition_id, position, class_name, role, notes) VALUES
(@comp1_id, 1, 'Iop', 'DPS', 'Focus dégâts terre, portée'),
(@comp1_id, 2, 'Eniripsa', 'Support', 'Soins et buff'),
(@comp1_id, 3, 'Panda', 'Tank', 'Positionnement et protection'),
(@comp1_id, 4, 'Cra', 'DPS', 'Dégâts à distance');

-- Composition 6 joueurs
INSERT INTO compositions (dungeon_id, party_size, title, description) VALUES
(1, 6, 'Compo full stuff 200', 'Composition pour joueurs niveau 200 bien équipés');

SET @comp2_id = LAST_INSERT_ID();

INSERT INTO composition_details (composition_id, position, class_name, role, notes) VALUES
(@comp2_id, 1, 'Iop', 'DPS', 'Stuff terre/feu'),
(@comp2_id, 2, 'Eniripsa', 'Support', 'Full sagesse'),
(@comp2_id, 3, 'Panda', 'Tank', 'High vitalité'),
(@comp2_id, 4, 'Cra', 'DPS', 'Multi-élément'),
(@comp2_id, 5, 'Sram', 'DPS', 'Dégâts critiques'),
(@comp2_id, 6, 'Osamodas', 'Support', 'Invocations et buff');

-- Compositions pour "Cimetière des Mastodontes" (dungeon_id = 2, niveau 80)

INSERT INTO compositions (dungeon_id, party_size, title, description) VALUES
(2, 4, 'Compo niveau 80-100', 'Composition accessible pour joueurs niveau 80-100');

SET @comp3_id = LAST_INSERT_ID();

INSERT INTO composition_details (composition_id, position, class_name, role, notes) VALUES
(@comp3_id, 1, 'Féca', 'Tank', 'Protection et glyphes'),
(@comp3_id, 2, 'Eniripsa', 'Support', 'Soins'),
(@comp3_id, 3, 'Iop', 'DPS', 'Dégâts'),
(@comp3_id, 4, 'Sacrieur', 'DPS/Tank', 'Absorbeur de dégâts');

-- Composition pour "Akadémie des Gobs" (dungeon_id = 3, niveau 40)

INSERT INTO compositions (dungeon_id, party_size, title, description) VALUES
(3, 4, 'Compo débutant niveau 40', 'Première composition pour donjons bas niveau');

SET @comp4_id = LAST_INSERT_ID();

INSERT INTO composition_details (composition_id, position, class_name, role, notes) VALUES
(@comp4_id, 1, 'Iop', 'DPS', 'N\'importe quel élément'),
(@comp4_id, 2, 'Eniripsa', 'Support', 'Soins basiques'),
(@comp4_id, 3, 'n\'importe quelle classe', 'DPS', 'Flexible'),
(@comp4_id, 4, 'n\'importe quelle classe', 'DPS', 'Flexible');
