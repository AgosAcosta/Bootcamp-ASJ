create database blockbuster

create table Tipos_productos(
 id_tipo_producto INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  tipo_producto varchar(50)
);

create table Autor(
id_autor INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
 autor varchar(50)
)

create table Generos(
id_genero INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
genero varchar(50)
)

CREATE table Formatos(
id_formatos INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
 formato varchar(50)
)

CREATE Table Productos(
id_producto INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
 id_tipo_producto int,
  nombre_producto varchar(50),
  descripcion_producto varchar(50),
  id_autor int,
  id_genero int,
  id_formatos int,
precio_alq_producto float,
  precio_ven_producto float,
stock int,
  stock_min int
   FOREIGN KEY (id_tipo_producto) REFERENCES Tipos_productos (id_tipo_producto),
  FOREIGN KEY (id_autor) REFERENCES Autor (id_autor),
   FOREIGN KEY (id_genero) REFERENCES Generos (id_genero),
   FOREIGN KEY (id_formatos) REFERENCES Formatos (id_formatos), 
)

CREATE table tipos_clientes(
id_tipo_cliente INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
cliente varchar(50),
)

CREATE Table Paises(
id_pais INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  pais varchar(50),
)
CREATE Table Provincias(
id_provincia INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  provincia varchar(50),
  id_pais int,
   FOREIGN KEY (id_pais) REFERENCES Paises (id_pais),
)
CREATE Table Localidades(
id_localidad INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  localidad varchar(50),
  id_provincia int,
   FOREIGN KEY (id_provincia) REFERENCES Provincias (id_provincia),
)
CREATE Table Direcciones(
id_dire INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  calle_dire varchar(50),
  num_dire int,
    piso_dire varchar(50),
    dpto_dire varchar(50),
   cp_dire int,
  id_localidad int,  
   FOREIGN KEY (id_localidad) REFERENCES Localidades (id_localidad),
)

create table Clientes(
id_cliente INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
 nombre_cliente varchar(50),
  apellido_cliente varchar(50),
  cuil_cliente varchar(50),
  tel_cliente varchar(50),
  email_cliente varchar(50),
  fecha_nac_cliente Datetime,
  id_dire int,
  id_tipo_cliente int,
  FOREIGN KEY (id_dire) REFERENCES Direcciones (id_dire),
  FOREIGN KEY (id_tipo_cliente) REFERENCES tipos_clientes (id_tipo_cliente),
  
)

cREATE TABLE Sucursales(
id_sucursal INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
 nombre_sucursal varchar(50),
   id_dire int,
    FOREIGN KEY (id_dire) REFERENCES Direcciones (id_dire),
)
create table Vendedores(
id_vendedor INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  legajo_vendedor int,
 nombre_vendedor varchar(50),
  apellido_vendedor varchar(50),
  id_dire int,
  id_sucursal int,
  FOREIGN KEY (id_dire) REFERENCES Direcciones (id_dire),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales (id_sucursal),
  
)

create table Tipos_Operaciones(
  id_tipo_operacion INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
operacion varchar(50),
)

create table Medios_de_Pagos(
  id_medio_pago INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
medio_pago varchar(50),
)
create table Pedidos(
  id_pedido INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
num_pedido int,
  fecha_emision_pedido DateTime,
  id_tipo_operacion int,
  id_cliente int,
  id_vendedor int,
  id_sucursal int,
  total_pedido float,
  descuento_socio float,
  penalidad_devolucion float,
  id_medio_pago int,
   FOREIGN KEY (id_tipo_operacion) REFERENCES Tipos_Operaciones (id_tipo_operacion),
   FOREIGN KEY (id_cliente) REFERENCES Clientes (id_cliente),
    FOREIGN KEY (id_vendedor) REFERENCES Vendedores (id_vendedor),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales (id_sucursal),
  FOREIGN KEY (id_medio_pago) REFERENCES Medios_de_Pagos (id_medio_pago),
)

create table Detalle_Pedidos(
  id_detalle_pedido INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
id_pedido int,
  id_producto int,
  cantidad int,
  precio float,
  fecha_devolucion DateTime

   FOREIGN KEY (id_pedido) REFERENCES Pedidos (id_pedido),
   FOREIGN KEY (id_producto) REFERENCES Productos (id_producto),
)

ALTER TABLE Productos
ALTER COLUMN descripcion_producto VARCHAR(250);

INSERt INTO Tipos_productos (tipo_producto) VALUES
('Musica'),
('Pelicula'),
('Serie')

INSERT INTO Autor (Autor) VALUES
('James Cameron'),
('Robert Zemeckis'),
('George R. R. Martin'),
('Gilligan'),
('Michael Jackson'),
('Madonna')

INSERT INTO Generos (genero) VALUES
('Drama'),
('Comedia'),
('Accion'),
('Pop Disco')

SELECT * FROM Productos

INSERT INTO Formatos (formato) VALUES
('DVD'),
('CD'),
('Cassette'),
('Vinilo')


INSERT INTO Productos 
VALUES
(2, 'Back to the Future','La trama sigue a Marty McFly quien accidentalmente viaja en el tiempo a 1955 con la ayuda del excéntrico científico Doc Brown',2,2,2,1800,3000,3000,100),
(3, 'Game of Thrones',' se desarrolla en el ficticio continente de Westeros y sigue múltiples tramas entrelazadas que involucran casas nobles en su lucha por el Trono de Hierro',3,3,2,2000,3000,3000,100),
(3, 'Breaking Bad',' Walter White, un profesor de química de secundaria. Junto a su antiguo estudiante Jesse Pinkman, ambos se ven envueltos en el oscuro mundo del narcotráfico.',4,1,1,2500,3000,3000,100),
(1, 'Thriller','"Thriller" es el sexto álbum de estudio del legendario músico Michael Jackson, lanzado en 1982.',5,4,4,700,3000,3000,100),
(1, 'Like a Virgin','Uno de los álbumes más icónicos de Madonna es "Like a Virgin", lanzado en 1984',6,4,4,200,900,3000,100);

INSERT into tipos_clientes(cliente)
VALUES
('Socio'),
('No socio')

INSERT Into Paises (pais)
VALUES
('Argentina')

INSERT Into Provincias (provincia, id_pais)
VALUES
('Buenos Aires', 1),
('Cordoba', 1),
('Santa Fe', 1)

INSERT Into Localidades (localidad, id_provincia)
VALUES
('Cordoba Capital', 2),
('Arroyito', 2)

INSERT INTO Localidades (localidad, id_provincia)
VALUES
('Santa Fe Capital', 3),
('Rosario', 3);

INSERT INTO Direcciones (calle_dire, num_dire, piso_dire, dpto_dire, cp_dire, id_localidad)
VALUES
('Calle 1', 123, '2', 'A', 5000, 1),
('Avenida 2', 456, '3', 'B', 5100, 2),
('Calle 3', 789, '1', 'C', 5200, 3);


INSERT INTO Clientes (nombre_cliente, apellido_cliente, cuil_cliente, tel_cliente, email_cliente, fecha_nac_cliente, id_dire, id_tipo_cliente)
VALUES
('Juan', 'Perez', '20-12345678-0', '1234567890', 'juan@gmail.com', '1990-01-15', 1, 1),
('Maria', 'Gomez', '27-87654321-9', '0987654321', 'maria@gmail.com', '1985-05-20', 2, 2);


INSERT INTO Sucursales (nombre_sucursal, id_dire)
VALUES
('Sucursal Centro', 1),
('Sucursal Norte', 2);


INSERT INTO Vendedores (legajo_vendedor, nombre_vendedor, apellido_vendedor, id_dire, id_sucursal)
VALUES
(1001, 'Carlos', 'Gutierrez', 3, 1),
(1002, 'Ana', 'Lopez', 4, 2);


INSERT INTO Tipos_Operaciones (operacion)
VALUES
('Venta'),
('Alquiler');


INSERT INTO Medios_de_Pagos (medio_pago)
VALUES
('Efectivo'),
('Tarjeta de debito'),
('Transferencia'),
('Tarjeta de credito');


INSERT INTO Pedidos (num_pedido, fecha_emision_pedido, id_tipo_operacion, id_cliente, id_vendedor, id_sucursal, total_pedido, descuento_socio, penalidad_devolucion, id_medio_pago)
VALUES
(1, GETDATE(), 1, 1, 1, 1, 1500, 100, 0, 1),
(2, GETDATE(), 2, 2, 2, 2, 2000, 150, 0, 2);


INSERT INTO Detalle_Pedidos (id_pedido, id_producto, cantidad, precio, fecha_devolucion)
VALUES
(1, 4, 2, 500, GETDATE()),
(2, 12, 1, 1000, GETDATE());


INSERT INTO Direcciones (calle_dire, num_dire, piso_dire, dpto_dire, cp_dire, id_localidad) VALUES
('Broadway St', 789, '5', 'D', 10001, 3),
('Rue de Rivoli', 101, '3', 'A', 75001, 4);

INSERT INTO Clientes (nombre_cliente, apellido_cliente, cuil_cliente, tel_cliente, email_cliente, fecha_nac_cliente, id_dire, id_tipo_cliente) VALUES
('Laura', 'Smith', '34-56789012-3', '456-7890123', 'laura@example.com', '1992-12-15',7, 1),
('Chris', 'Taylor', '45-67890123-4', '567-8901234', 'chris@example.com', '1988-08-05', 8, 2);


INSERT INTO Sucursales (nombre_sucursal, id_dire) VALUES
('Sucursal Sur', 4),
('Sucursal Norte', 5);


INSERT INTO Vendedores (legajo_vendedor, nombre_vendedor, apellido_vendedor, id_dire, id_sucursal) VALUES
(1005, 'Emma', 'Davis', 7, 5),
(1006, 'Samuel', 'Brown', 8, 4);


INSERT INTO Pedidos (num_pedido, fecha_emision_pedido, id_tipo_operacion, id_cliente, id_vendedor, id_sucursal, total_pedido, descuento_socio, penalidad_devolucion, id_medio_pago) VALUES
(5, GETDATE(), 1, 5, 6, 5, 600, 30, 0, 1),
(6, GETDATE(), 2, 4, 7, 4, 900, 70, 0, 2);


INSERT INTO Detalle_Pedidos (id_pedido, id_producto, cantidad, precio, fecha_devolucion) VALUES
(8, 13, 2, 300, GETDATE()),
(9, 14, 1, 450, GETDATE());


SELECT nombre_producto 'Nombre', precio_alq_producto 'Precio'
FROM Productos
WHERE precio_alq_producto < 2000;

SELECT * from Clientes
WHERE id_tipo_cliente = 1 and id_dire = 7


select nombre_cliente 'Nombre', apellido_cliente 'Apellido', tc.cliente 'Cliente' 
from Clientes c
INNER JOIN tipos_clientes tc on c.id_tipo_cliente = tc.id_tipo_cliente

--Buscamos los generos que contengan la A (no que empiece)

SELECT nombre_producto 'Nombre', f.formato 'Formato', g.genero 'Genero'
FROM Productos p 
INNER JOIN Formatos f on f.id_formatos = p.id_formatos
INNER JOIN Generos g on g.id_genero = p.id_genero
WHERE g.genero LIKE '%a%'

--Buscamos los generos que su segunda letra sea una O

SELECT nombre_producto 'Nombre', f.formato 'Formato', g.genero 'Genero'
FROM Productos p 
INNER JOIN Formatos f on f.id_formatos = p.id_formatos
INNER JOIN Generos g on g.id_genero = p.id_genero
WHERE g.genero LIKE '_o%'


---------------------------------------------------------
SELECT p.num_pedido 'N° Pedido', c.nombre_cliente 'Nombre', c.apellido_cliente 'Apellido', 
c.email_cliente 'Email', pr.provincia 'Provincia Cliente'
FROM Pedidos p 
INNER JOIN Clientes c ON c.id_cliente = p.id_cliente
INNER JOIN Direcciones d ON d.id_dire = c.id_dire
INNER JOIN Localidades l ON l.id_localidad = d.id_localidad
INNER JOIN Provincias pr ON pr.id_provincia = l.id_provincia;

-----------------------------------------------------------

---- Buscar los pedidos (fecha, total nombre y apellido)de los socios que tengan Gmail

SELECT p.fecha_emision_pedido 'Fecha Pedido', dp.cantidad * dp.precio 'Total',c.nombre_cliente 'Nombre', c.apellido_cliente 'Apellido', 
c.email_cliente 'Email', tc.cliente 'Socio'
FROM Pedidos p 
INNER JOIN Detalle_Pedidos dp on dp.id_pedido = p.id_pedido
INNER JOIN Clientes c ON c.id_cliente = p.id_cliente
INNER JOIN tipos_clientes tc on tc.id_tipo_cliente = c.id_tipo_cliente
WHERE tc.id_tipo_cliente = 1 and c.email_cliente like'%gmail%'


ALTER TABLE Autor
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Autor
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Clientes
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Clientes
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Detalle_Pedidos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Detalle_Pedidos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Direcciones
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Direcciones
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Formatos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Formatos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Generos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Generos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Medios_de_Pagos
ADD created_at DATETIME DEFAULT GETDATE();
ALTER TABLE Medios_de_Pagos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Pedidos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Pedidos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Productos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Productos
ADD update_at DATE DEFAULT GETDATE();

ALTER TABLE Sucursales
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Sucursales
ADD update_at DATE DEFAULT GETDATE();


ALTER TABLE tipos_clientes
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE tipos_clientes
ADD update_at DATE DEFAULT GETDATE();
ALTER TABLE Tipos_Operaciones
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Tipos_Operaciones
ADD update_at DATE DEFAULT GETDATE();
ALTER TABLE Tipos_productos
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Tipos_productos
ADD update_at DATE DEFAULT GETDATE();
ALTER TABLE Vendedores
ADD created_at DATE DEFAULT GETDATE();
ALTER TABLE Vendedores
ADD update_at DATE DEFAULT GETDATE();





