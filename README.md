# api-rest-js
```
{
    "author": "Harold Joseph Sanchez Nogales",
    "correo": "haroldjosano23@gmail.com",
    "dni": "7898422",
}
```
El api rest se inició con el comando, después se procede a instalar express, morgan y sequelize con el siguiente comando, instalamos los drivers para utilizar postgres con el siguiente comando, luego instalamos el cli de sequelize, por último, se instaló l variable de entorno dotenv.
```
npm init -y
npm i express morgan sequelize
npm i pg pg-hstore
npm i sequelize-cli -D
npm i dotenv
```
La contraseña del posgrest que se utilizo es
* contraseña: postgress

cambiar la contraseña dentro el  database.js


luego precedemos a crear, en “env” y “env.sample” se encuentra el puerto con el que vamos a trabajar
```
.gitignore
.env.sample
.env
index.js
app.js

```
Se creo el script para facilitar levantar el servicio 
* "dev": "node src/index.js"

Y se lo ejecuta con
* npm run dev

Mostramos datos de usuario, categoria y producto
```
Get  http://localhost:3002/api/usuarios 
Get  http://localhost:3002/api/categorias 
Get  http://localhost:3002/api/productos
```
Mostrar datos de usuario,categoria y producto por id
```
Get http://localhost:3002/api/usuarios/2
Get http://localhost:3002/api/categorias/1
Get http://localhost:3002/api/productos/1
```
Creamos los datos de usuario, categoria y producto
```
post http://localhost:3002/api/usuarios
Post http://localhost:3002/api/categorias
Post http://localhost:3002/api/productos
```
Actualizar datos de usuario,categoria y producto por id
```
Put http://localhost:3002/api/usuarios/3
Put http://localhost:3002/api/categorias/1
Put http://localhost:3002/api/productos/1
```
Eliminar datos de usuario,categoria y producto por id
```
Delete http://localhost:3002/api/usuarios/4
Delete http://localhost:3002/api/categorias/1 
Delete http://localhost:3002/api/productos/1 
```
Mostar todas las categorías relacionadas con el usuario, mostrar las categorías de un usuario
```
Get http://localhost:3002/api/usuarios/1/categorias
Get http://localhost:3002/api/usuarios/all/categorias/all
```
Mostar los productos relacionados con usuario y con categoria
```
Get http://localhost:3002/api/usuarios/all/productos/all  
Get http://localhost:3002/api/usuarios/1/productos 
Get http://localhost:3002/api/categorias/1/productos 
```
Se procedió a la instalación de pino para usar los log y instalamos jwt
* npm i pino pino-pretty
* npm i jsonwebtoken

Se creo un “login controller” y un “ login routes” para poder agregar al usuario
```
http://localhost:3002/api/login/6
```
con este link obtuvimos el token para el usuario con id=6, posteriormente en el post de usuario se agrego en Authorization el token obtenido con el cual se pudo crear al usuario6 
además que se realizo los token de verificación de categoría y producto y se coloco los token en post, put, get y delete de ambos, creando dos nuevas routes y dos controllers.
