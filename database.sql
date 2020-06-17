-- Database: Veterinaria

-- DROP DATABASE "Veterinaria";

/*CREATE DATABASE "Veterinaria"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	*/
	CREATE TABLE gatos (
    cat_id INT GENERATED ALWAYS AS IDENTITY,
    cat_name VARCHAR  NULL,
	cat_age VARCHAR NULL
);

INSERT INTO gatos(cat_name, cat_age) VALUES('Gato 1', '12');
	