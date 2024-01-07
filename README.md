# Markdown Links

## Índice

* [1. Descripción](#1-descripción)
* [2. Instalación](#2-instalación)
* [3. Guía de uso](#3-guía-de-uso)
  
***

## 1. Descripción
markdown-links es una librería desarrollada con [Node.js](https://nodejs.org/en) que permite leer y analizar archivos [Markdown](https://es.wikipedia.org/wiki/Markdown) para validar el estado de los enlaces contenidos en ellos y proporcionar datos estadísticos útilies para un análisis más completo.  


## 2. Instalación
Como requisito debes tener isntalado [Node.js](https://nodejs.org/en).
Para realizar la instalación de esta librería ejecuta el siguiente comando en tu terminal:

El siguiente comando `npm install mjvaldebenito-md-links`


## 3. Guía de uso

### **CLI**

* Para leer un archivo markdown y extraer sus enlaces escribe markdown-links seguido de la ruta del archivo.
  - Por ejemplo: `prueba.md`
    
  Como resultado visualizarás en la terminal los links extraídos junto con el texto que los acompaña y el nombre del archivo del cual se extrajeron.

**NOTA:** Si se ingresa una ruta inexistente se mostrará el mensaje `'La ruta no existe'`, en cambio, si se ingresa la ruta de un archivo no markdown se mostrará el mensaje `'El archivo no es un markdown'`.


* Si deseas obtener el estado de cada uno de los links extraídos escribe en la terminal markdown-links seguido de la ruta del archivo y de la opción --validate.
  
  `markdown-links prueba.md --validate`

  Se mostrarán el código de estado de los enlaces y el estado: `'ok'` si el enlace está activo o `'fail'` si el link está roto.
  
* Para conocer el total de enlaces y de enlaces únicos del archivo analizado ejecuta el comando markdown-links seguido de la opción --stats.
  
* Si quieres conocer el número de enlaces rotos ejecuta el comando markdown-links seguido de --validate --stats
