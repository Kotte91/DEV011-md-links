const { mdLinks } = require('./mdLinks')

const validate = process.argv.includes("--validate")
const stats = process.argv.includes("--stats")
const ruta = process.argv[2]

// mdLinks(ruta, validate, stats)
//   .then(res => console.log('funciona bien', res))
//   .catch(error => console.log('ruta errada', error));

mdLinks(ruta, validate, stats)
  .then((res) => {
    if (stats) {
      const statistics = statsWithValidate(res);
      console.log('Statistics:', statistics);
    } else {
      console.log('Funciona bien', res);
    }
  })
  .catch(error => console.error('Error:', error.message));
