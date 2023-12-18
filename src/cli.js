const { mdLinks } = require ('./mdLinks')

const validateLinks = process.argv.includes("--validate")
const  ruta = process.argv[2]

if (validateLinks) {
  
} else {
  
}
mdLinks(ruta)
  .then(res => console.log('funciona bien', res))
  .catch(error => console.log('ruta errada', error));
