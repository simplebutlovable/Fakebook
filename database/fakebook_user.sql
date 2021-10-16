/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.15 : Database - fakebook_user
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`fakebook_user` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `fakebook_user`;

/*Table structure for table `non_person_user` */

DROP TABLE IF EXISTS `non_person_user`;

CREATE TABLE `non_person_user` (
  `nonperson_id` int(11) NOT NULL AUTO_INCREMENT,
  `nonperson_name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nonperson_category` int(11) NOT NULL,
  `nonperson_bio` varchar(1000) DEFAULT NULL,
  `date_joined` date NOT NULL,
  `last_login` date DEFAULT NULL,
  `visibility` int(11) NOT NULL,
  `auth_token` varchar(5000) DEFAULT NULL,
  `profile_pictures` int(11) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  PRIMARY KEY (`nonperson_id`),
  KEY `non_person_category` (`nonperson_category`),
  KEY `non_person_visibility` (`visibility`),
  KEY `non_person_profile_pictures` (`profile_pictures`),
  KEY `non_person_created_by` (`created_by`),
  CONSTRAINT `non_person_category` FOREIGN KEY (`nonperson_category`) REFERENCES `fakebook_settings`.`non_person_category` (`category_id`) ON UPDATE CASCADE,
  CONSTRAINT `non_person_created_by` FOREIGN KEY (`created_by`) REFERENCES `personal_user` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `non_person_profile_pictures` FOREIGN KEY (`profile_pictures`) REFERENCES `fakebook_settings`.`user_profile_pictures` (`user_profile_id`) ON UPDATE CASCADE,
  CONSTRAINT `non_person_visibility` FOREIGN KEY (`visibility`) REFERENCES `fakebook_settings`.`profile_visibility` (`visibility_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `personal_user` */

DROP TABLE IF EXISTS `personal_user`;

CREATE TABLE `personal_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `birhdate` date DEFAULT NULL,
  `permanent_address` int(11) DEFAULT NULL,
  `work_address` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'civil status',
  `date_joined` date NOT NULL,
  `last_login` date NOT NULL,
  `bio` varchar(1000) DEFAULT NULL,
  `auth_token` varchar(5000) DEFAULT NULL,
  `visibility` int(11) NOT NULL,
  `profile_pictures` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `relationship_status` (`status`),
  KEY `personal_visibility` (`visibility`),
  KEY `personal_profile_pictures` (`profile_pictures`),
  CONSTRAINT `personal_profile_pictures` FOREIGN KEY (`profile_pictures`) REFERENCES `fakebook_settings`.`user_profile_pictures` (`user_profile_id`),
  CONSTRAINT `personal_visibility` FOREIGN KEY (`visibility`) REFERENCES `fakebook_settings`.`profile_visibility` (`visibility_id`),
  CONSTRAINT `relationship_status` FOREIGN KEY (`status`) REFERENCES `fakebook_settings`.`relationship_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
