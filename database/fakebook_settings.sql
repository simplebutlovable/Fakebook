/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.15 : Database - fakebook_settings
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`fakebook_settings` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `fakebook_settings`;

/*Table structure for table `non_person_category` */

DROP TABLE IF EXISTS `non_person_category`;

CREATE TABLE `non_person_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `profile_visibility` */

DROP TABLE IF EXISTS `profile_visibility`;

CREATE TABLE `profile_visibility` (
  `visibility_id` int(11) NOT NULL AUTO_INCREMENT,
  `visibility_name` varchar(100) NOT NULL,
  PRIMARY KEY (`visibility_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `relationship_status` */

DROP TABLE IF EXISTS `relationship_status`;

CREATE TABLE `relationship_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(15) NOT NULL,
  `relationship_with` int(1) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `user_profile_pictures` */

DROP TABLE IF EXISTS `user_profile_pictures`;

CREATE TABLE `user_profile_pictures` (
  `user_profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_pic_sm` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `profile_pic_md` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `profile_picture` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `profile_date_created` date NOT NULL,
  `profile_date_updated` date DEFAULT NULL,
  `user_cover_sm` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_cover_md` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_cover` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cover_date_created` date NOT NULL,
  `cover_date_updated` date DEFAULT NULL,
  PRIMARY KEY (`user_profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
