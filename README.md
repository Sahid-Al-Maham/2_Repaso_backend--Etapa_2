# 2_Repaso_backend--Etapa_2
En este repositorio podemos repasar algunos pasos básicos para trabajar en node.js desarrollando una api que levante distintos Clientes (frontend) independientes.


## Instalación
1.- Antes de clonar el proyecto, crea una carpeta en tu disco donde guardarlo, ej: "Repaso"

2.- En vs code abre una nueva terminal y navegua hasta la acrpeta creada, ej: suDisco:\suRuta\suCarpetaCreada
D:\Estudio\Compu\Repaso>

3.- Ejecuta en terminal (siguiendo el mismo ejemplo anterior):
D:\Estudio\Compu\Repaso> git clone https://github.com/tuUsuario/2_Repaso_backend--Etapa_2.git
donde tuUsuario debes reemplazarlo con tu usuario de GitHub
y el proyecto se guardará en: D:\Estudio\Compu\Repaso\2_Repaso_backend--Etapa_2
Lo mismo debes hacer para clonar en la misma carpeta Repaso (es muy conveniente que tanto la parte de frontend y backend esten en la misma carpeta) la parte del proyecto que contiene el frontend:
https://github.com/tuUsuario/2_Repaso_frontend--Etapa_2.git

4.- Ahora te posicionas en en la carpeta del repositorio clonado con: cd 2_Repaso_backend--Etapa_2
ten en cuenta que en terminal debe figurar asi (de acuerdop a nuestro ejemplo):
D:\Estudio\Compu\Repaso\2_Repaso_backend--Etapa_2> (y aquí trabajaremos las sentencias de backend)
mientras que en otro vs code abierto puedes tener: D:\Estudio\Compu\Repaso\2_Repaso_frontend--Etapa_2> (y aquí trabajaremos las sentencias del frontend)

5.- Primero hay que instalar las dependencias del proyecto con: npm install
D:\Estudio\Compu\Repaso\2_Repaso_backend--Etapa_2> npm install
(esto puede demorar pero no mucho, solo unos minutos)

6.- Ahora ya puedes levantar el proyecto ejecutando: npm start
D:\Estudio\Compu\Repaso\2_Repaso_backend--Etapa_2> npm start

7.- en el navegador:
http://localhost:3000/server (veras la pagina de nuestro backend) y en
http://localhost:8080 (veras el html del proyecto frontend)

8.- en el archivo package.json, agregamos para compatibilidad ESM y usar import / export:
"type": "module", es mejor inmediatamente debajo de: version": "1.0.0",

## Uso

Ejemplos de cómo utilizar el proyecto.

## Contribuciones

Guía para contribuir al proyecto.

