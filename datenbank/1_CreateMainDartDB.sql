-- --------------------------------------------------------
-- Host:                         sebisserver.ddns.net
-- Server-Version:               10.3.38-MariaDB-0ubuntu0.20.04.1 - Ubuntu 20.04
-- Server-Betriebssystem:        debian-linux-gnu
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Exportiere Datenbank-Struktur für dart
CREATE DATABASE IF NOT EXISTS `dart_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */;
USE `dart_db`;

-- Exportiere Struktur von Tabelle dart_db.dart
CREATE TABLE IF NOT EXISTS `dart` (
                                      `pk_dart_id` int(11) NOT NULL AUTO_INCREMENT,
                                      `fk_turn_id` int(11) NOT NULL,
                                      `field_number` int(11) NOT NULL,
                                      `fk_field_type_id` int(11) NOT NULL,
                                      PRIMARY KEY (`pk_dart_id`),
                                      KEY `dart_turn_key` (`fk_turn_id`) USING BTREE,
                                      KEY `dart_field_type_key` (`fk_field_type_id`) USING BTREE,
                                      CONSTRAINT `dart_field_type_constraint` FOREIGN KEY (`fk_field_type_id`) REFERENCES `field_type` (`pk_field_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                      CONSTRAINT `dart_turn_constraint` FOREIGN KEY (`fk_turn_id`) REFERENCES `turn` (`pk_turn_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.field_type
CREATE TABLE IF NOT EXISTS `field_type` (
                                            `pk_field_type_id` int(11) NOT NULL,
                                            `description` varchar(50) NOT NULL DEFAULT '',
                                            `multiplier` int(11) NOT NULL,
                                            PRIMARY KEY (`pk_field_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.game
CREATE TABLE IF NOT EXISTS `game` (
                                      `pk_game_id` int(11) NOT NULL AUTO_INCREMENT,
                                      `fk_game_type_id` int(11) NOT NULL,
                                      `date` date NOT NULL,
                                      `amount_sets` int(11) NOT NULL,
                                      `amount_legs` int(11) NOT NULL,
                                      `fk_winner_id` int(11) DEFAULT NULL,
                                      PRIMARY KEY (`pk_game_id`),
                                      KEY `game_game_type_key` (`fk_game_type_id`) USING BTREE,
                                      KEY `game_winner_key` (`fk_winner_id`) USING BTREE,
                                      CONSTRAINT `game_game_type_constraint` FOREIGN KEY (`fk_game_type_id`) REFERENCES `game_type` (`pk_game_type_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                      CONSTRAINT `game_winner_constraint` FOREIGN KEY (`fk_winner_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.game_player
CREATE TABLE IF NOT EXISTS `game_player` (
                                             `fk_game_id` int(11) NOT NULL,
                                             `fk_player_id` int(11) NOT NULL,
                                             `player_order` int(11) NOT NULL DEFAULT 0,
                                             PRIMARY KEY (`fk_player_id`,`fk_game_id`) USING BTREE,
                                             KEY `game_player_game_key` (`fk_game_id`) USING BTREE,
                                             CONSTRAINT `game_player_game_constraint` FOREIGN KEY (`fk_game_id`) REFERENCES `game` (`pk_game_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
                                             CONSTRAINT `game_player_player_constraint` FOREIGN KEY (`fk_player_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.game_type
CREATE TABLE IF NOT EXISTS `game_type` (
                                           `pk_game_type_id` int(11) NOT NULL,
                                           `description` varchar(50) NOT NULL DEFAULT '',
                                           `score` int(11) NOT NULL DEFAULT 0,
                                           PRIMARY KEY (`pk_game_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.leg
CREATE TABLE IF NOT EXISTS `leg` (
                                     `pk_leg_id` int(11) NOT NULL AUTO_INCREMENT,
                                     `fk_set_id` int(11) DEFAULT NULL,
                                     `fk_winner_id` int(11) DEFAULT NULL,
                                     PRIMARY KEY (`pk_leg_id`),
                                     KEY `leg_set_key` (`fk_set_id`) USING BTREE,
                                     KEY `leg_winner_key` (`fk_winner_id`) USING BTREE,
                                     CONSTRAINT `leg_set_constraint` FOREIGN KEY (`fk_set_id`) REFERENCES `set_table` (`pk_set_id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `leg_winner_constraint` FOREIGN KEY (`fk_winner_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.login
CREATE TABLE IF NOT EXISTS `login` (
                                       `pk_login_id` int(11) NOT NULL AUTO_INCREMENT,
                                       `fk_player_id` int(11) NOT NULL,
                                       `login_time` datetime NOT NULL,
                                       PRIMARY KEY (`pk_login_id`),
                                       KEY `login_player_key` (`fk_player_id`) USING BTREE,
                                       CONSTRAINT `login_player_constraint` FOREIGN KEY (`fk_player_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.player
CREATE TABLE IF NOT EXISTS `player` (
                                        `pk_player_id` int(11) NOT NULL AUTO_INCREMENT,
                                        `email` varchar(100) NOT NULL,
                                        `nickname` varchar(100) NOT NULL,
                                        `password` varchar(100) NOT NULL,
                                        PRIMARY KEY (`pk_player_id`),
                                        UNIQUE KEY `Email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.set
CREATE TABLE IF NOT EXISTS `set_table` (
                                     `pk_set_id` int(11) NOT NULL AUTO_INCREMENT,
                                     `fk_game_id` int(11) NOT NULL,
                                     `fk_winner_id` int(11) DEFAULT NULL,
                                     PRIMARY KEY (`pk_set_id`),
                                     KEY `set_player_key` (`fk_game_id`) USING BTREE,
                                     KEY `set_winner_key` (`fk_winner_id`) USING BTREE,
                                     CONSTRAINT `set_player_constraint` FOREIGN KEY (`fk_game_id`) REFERENCES `game` (`pk_game_id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                     CONSTRAINT `set_winner_constraint` FOREIGN KEY (`fk_winner_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

-- Exportiere Struktur von Tabelle dart.turn
CREATE TABLE IF NOT EXISTS `turn` (
                                      `pk_turn_id` int(11) NOT NULL AUTO_INCREMENT,
                                      `fk_player_id` int(11) NOT NULL,
                                      `fk_leg_id` int(11) DEFAULT NULL,
                                      `amount_points` int(11) DEFAULT NULL,
                                      PRIMARY KEY (`pk_turn_id`),
                                      KEY `turn_player_key` (`fk_player_id`) USING BTREE,
                                      KEY `turn_leg_key` (`fk_leg_id`) USING BTREE,
                                      CONSTRAINT `turn_leg_constraint` FOREIGN KEY (`fk_leg_id`) REFERENCES `leg` (`pk_leg_id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                      CONSTRAINT `turn_player_constraint` FOREIGN KEY (`fk_player_id`) REFERENCES `player` (`pk_player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Daten-Export vom Benutzer nicht ausgewählt

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
