USE `filmara_db`;
CREATE TABLE `filmara_db`.`visitor` 
(`id` INT NOT NULL AUTO_INCREMENT , 
`hash` VARCHAR(64) NOT NULL , 
PRIMARY KEY (`id`)
) ENGINE = InnoDB;