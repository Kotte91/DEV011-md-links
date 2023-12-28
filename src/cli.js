const { mdLinks } = require('./mdLinks')

const validate = process.argv.includes("--validate")
const stats = process.argv.includes("--stats")
const ruta = process.argv[2]

mdLinks(ruta, validate, stats)
  .then(res => console.log('funciona bien', res))
  .catch(error => console.log('ruta errada', error));

// mdLinks(filePath, validate, stats)
//   .then(results => {
//     //console.log(results.links); // Enlaces procesados
//     console.log(results); // Estadísticas
//     mdLinks("./README.md", true)
//     //console.log(results.links);
//   })
//   .catch(error => {
//     console.error(error);
//   });