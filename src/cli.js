const { mdLinks } = require ('./mdLinks')

mdLinks('src/prueba.md')
  .then(res => console.log('funciona bien', res))
  .catch(error => console.log('ruta errada', error));
