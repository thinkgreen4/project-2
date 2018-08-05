CREATE DATABASE Plantsy_db

USE Plantsy_db


CREATE TABLE plants (
	id INT (10) AUTO_INCREMENT NOT NULL,
    plant_name VARCHAR (100) NOT NULL,
    plant_type VARCHAR (100) NOT NULL,
    in_store BOOLEAN, --1 for yes, 0 for no --
    PRIMARY KEY (id)
);
