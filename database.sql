
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
    Correo VARCHAR NULL);

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
    Propietario VARCHAR REFERENCES Clientes(IdCliente) NULL);

    CREATE TABLE Citas(
    IdCita VARCHAR PRIMARY KEY,
    Mascota VARCHAR REFERENCES Mascotas(IdMascota) NULL,
    Cliente VARCHAR REFERENCES Clientes(IdCliente) NULL,
    FechaCita DATE NULL,
    Descripcion VARCHAR NULL
    );
	
    CREATE TABLE Productos(
    IdProducto VARCHAR PRIMARY KEY,
    NombreProd VARCHAR NULL,
    Descripcion VARCHAR NULL,
    Precio NUMERIC NULL,
    Stock NUMERIC NULL
    );

    CREATE TABLE Servicios(
    IdServicio VARCHAR PRIMARY KEY,
    NombreServ VARCHAR NULL,
    Descripcion VARCHAR NULL,
    Precio NUMERIC NULL
    );

    CREATE TABLE ventas(
    IdVenta VARCHAR PRIMARY KEY,
    Costo NUMERIC NULL,
    FechaVenta DATE NULL,
    ClienteId VARCHAR NULL
    );

    CREATE TABLE VentaProductos(
    ProductoID VARCHAR REFERENCES Productos(idproducto) NULL,
    VentaID VARCHAR REFERENCES ventas(IdVenta) NULL,
    Cantidad NUMERIC NULL,
    Precio NUMERIC NULL,
    fechaventap DATE NULL
    );

    CREATE TABLE VentaServicios(
    ServicioId VARCHAR REFERENCES Servicios(idservicio) NULL,
    VentaID VARCHAR REFERENCES ventas(IdVenta) NULL,
    Cantidad NUMERIC NULL,
    Precio NUMERIC NULL,
    fechaventas DATE NULL
    );