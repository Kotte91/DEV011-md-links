const { mdLinks } = require ('./mdLinks')

mdLinks('docs/01-milestone.md')
  .then(res => console.log('funciona bien', res))
  .catch(error => console.log('ruta errada', error));
