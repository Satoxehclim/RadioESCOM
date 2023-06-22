--CREATE DATABASE RadioESCOM;
use RadioESCOM;
CREATE TABLE Usuario (
    id_usuario int IDENTITY(1,1) PRIMARY KEY,
    nombre char(255) NOT NULL,
    appat char(255) NOT NULL,
	apmat char(255) NOT NULL,
    correoElectronico char(255) NOT NULL,
    contraseña char(255) NOT NULL
);
CREATE TABLE TipoPublicacion(
	id_tipo int IDENTITY(1,1) PRIMARY KEY,
	tipo char(255) NOT NULL,
);

CREATE TABLE Publicacion (
    id_publicacion int IDENTITY(1,1) PRIMARY KEY,
    descripcion char(255) NOT NULL,
    fecha DATE NOT NULL,
    id_usuario int NOT NULL,
    id_tipo int NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_tipo) REFERENCES TipoPublicacion(id_tipo)
);

CREATE TABLE Comentario (
    id_comentario int IDENTITY(1,1) PRIMARY KEY,
	comentario char(255) NOT NULL,
    id_publicacion int NOT NULL,
	id_usuario int NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_publicacion) REFERENCES publicacion(id_publicacion)
);

CREATE TABLE Programa (
    id_programa int IDENTITY(1,1) PRIMARY KEY,
	programa char(255) NOT NULL
);
