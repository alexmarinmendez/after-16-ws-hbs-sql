# Desafio 8 in Backend course with Node.js @ Coderhouse
## Paso 1
* Iniciar, como código base, con el proyecto de [Websocket + Handlebars](https://github.com/alexmarinmendez/after-12-ws-hbs)

## Paso 2
* Instalar las dependencias para utilizar el cliente de aplicación de MySQL
```
npm install knex mysql
```

## Paso 3
* Crear la base de datos en MySQL

```
mysql -u root
CREATE DATABASE coder_desafio_8
USE coder_desafio_8
```
* Crear las opciones de conexión de KNEX indicando el nombre de la base de datos
* Modificar le ProductManager eliminando la implementación de todos los métodos (dejar solo las firmas de los métodos)
* Escribir el constructor de la clase ProductManager (debe recibir 2 argumentos: las opciones de conexión y el nombre de la tabla que debe crear)
* Modificar el router de Productos de tal manera que al instanciar la clase ProductManager se le brinde las opciones de conexión de Knex y el nombre de la tabla 'products'

## Paso 4
* Agregar, en el constructor de ProductManager, una validación para cuando la tabla ya existe (en el constructor, si la tabla no existe, se crea; caso contrario, ya no se crea)
* Asignar 2 propiedades a la clase ProductManager (las necesitaremos para implementar los métodos)
```
this.database
this.table
```

## Autor ✒️

* **Alex Marin Mendez** - *FullStack Javascript Web Developer*, 29 de setiembre de 2022 - [alexmarinmendez](https://github.com/alexmarinmendez)

## Licencia 📄

Eres libre de analizar/estudiar/forkear/copiar/mejorar este proyecto. Se agradecerá citar esta fuente cuando uses este proyecto.

## Expresiones de Gratitud 🎁

* Comenta a tod@s sobre este proyecto 📢
* Da las gracias públicamente 🤓.