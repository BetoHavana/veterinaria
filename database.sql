
/*CREATE DATABASE "Veterinaria"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
*/
    CREATE TABLE Clientes(
    IdCliente VARCHAR PRIMARY KEY,
    NombreCliente VARCHAR NULL,
    Direccion VARCHAR NULL,
    Telefono VARCHAR NULL,
    Celular VARCHAR NULL,
    Correo VARCHAR NULL,
    );

	CREATE TABLE Mascotas (
    IdMascota VARCHAR PRIMARY KEY,
    NombreMascota VARCHAR  NULL,
    Sexo VARCHAR NULL,
    Color VARCHAR NULL,
    Especie VARCHAR NULL,
    Raza VARCHAR NULL,
    NumCartilla NUMERIC NULL,
    FechaNacimiento DATE NULL,
    Edad NUMERIC NULL,
    Propietario VARCHAR REFERENCES Clientes(IdCliente)
);

INSERT INTO gatos(cat_name, cat_age) VALUES('Gato 1', '12');
	