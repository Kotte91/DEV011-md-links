const { mdLinks } = require ('./mdLinks')

const validate = process.argv.includes("--validate")
const stats = process.argv.includes("--stats")
const  ruta = process.argv[2]

mdLinks(ruta, validate, stats)
  .then(res => console.log('funciona bien', res))
  .catch(error => console.log('ruta errada', error));
