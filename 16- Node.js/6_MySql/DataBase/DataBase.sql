use mysql1;
create database mysql1;
drop database mysql1;
CREATE TABLE users (
    idUser INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Passowrd VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    Image VARCHAR(255) NOT NULL,
    UNIQUE KEY unique_email (email),
    PRIMARY KEY(idUser)
);
CREATE TABLE Post (
    idPost INT AUTO_INCREMENT NOT NULL,
    idUser INT,
    Name_Post VARCHAR(100) NOT NULL,
    Category_Post VARCHAR (100) NOT NULL,
    Images_Post VARCHAR(255) NOT NULL,
    Country_Post VARCHAR (100) NOT NULL,
    Price_Post DOUBLE(6, 2) NOT NULL,
    Date_Post VARCHAR (100) NOT NULL,
    PRIMARY KEY (idPost),
    FOREIGN KEY (idUser) REFERENCES users (idUser)
);