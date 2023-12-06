const { convertAbsolute, extencionName } = require('./function.js');
const fs = require( 'fs' );

function mdLinks(route) {
  return new Promise((resolve, reject) => {
    const completePath = convertAbsolute(route);

    if (!fs.existsSync(completePath)) {
      reject('La ruta es incorrecta');
    }

    const extension = extencionName(completePath);
    resolve({ message: 'La ruta está correcta', completePath, extension });
  });
}

module.exports = {
  mdLinks,
}