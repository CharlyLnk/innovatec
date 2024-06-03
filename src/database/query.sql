CREATE DATABASE IF NOT EXISTS Prueba01;

USE Prueba01;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(50) NOT NULL,
    apellido_cliente VARCHAR(50) NOT NULL,
    edad INT NOT NULL
);

SELECT * FROM clientes;