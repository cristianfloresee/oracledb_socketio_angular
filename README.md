

This repository contains server & client side code using `TypeScript` language


<"http://reactivex.io/rxjs/">

## Requerimientos (Windows)
Antes de Instalar oracledb se necesitan algunos pre-requisitos:

Instalar Visual Studio 2013 Community Edition o superior https://www.visualstudio.com/downloads/
Instalar Python 2.7 https://www.python.org/downloads/release/python-2710/
node.js https://nodejs.org/en/download/
descargar y descomprimir "Instant Client Package - Basic:" y "Instant Client Package - SDK" [en una ruta facil de recordar] primero descomprimir el ICPB y luego dentro de la carpeta el ICP-SDK http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html (Version 11.2.0.4.0 ) NO INSTALAR LA V12.X.X.X.X
Configurar las variables de entorno


(Ya falta poco... :D ).... luego de tener todo lo anterior instalado... tenemos que configurar variables de entorno. para entrar a las variables de entorno presionado las tecla de windows+pause, luego buscamos la opcion de "configuracion avanzada de sistema", luego opciones avanzadas, variables de entorno. en variable sistema crear "OCI_LIB_DIR" con el vaor "C:\Oracle\instantclient\sdk\lib\msvc" (ruta donde descomprimieron los paquetes) y crear "OCI_INC_DIR" con el valor "C:\Oracle\instantclient\sdk\include". a la variable path agregar al inicio “C:\instantclient;C:\instantclient\vc8;C:\instantclient\vc9;” (sin comias) y por ultimo reiniciamos la computadora.

# Cliente

# Servidor

# Referencias

https://github.com/ejchicas/rhnode
http://www.oracle.com/technetwork/es/articles/database-performance/restful-node-3813084-esa.html
https://www.youtube.com/watch?v=jPEjNiDnZ4M


Anuglar

Todos los modulos deben tener sus propias rutas

BUENAS PRACTICAS

https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81