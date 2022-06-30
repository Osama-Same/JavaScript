use mysql1;
create database mysql1;
 drop database mysql1;
CREATE TABLE users (
    idUser INT AUTO_INCREMENT NOT NULL,
    FirstName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Passowrd VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    Image VARCHAR(255) NOT NULL,
    UNIQUE KEY unique_email (email),
    PRIMARY KEY(idUser)
);