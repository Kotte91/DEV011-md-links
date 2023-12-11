const { convertAbsolute, extensionName, nameExt, readFile} = require('./function.js');
const fs = require( 'fs' );

function mdLinks(route) {
  return new Promise((resolve, reject) => {
    const completePath = convertAbsolute(route);

    if (!fs.existsSync(completePath)) {
      reject('La ruta es incorrecta');
    }

    const extension = extensionName(completePath);
    const extresult = nameExt(completePath);
    
    readFile(completePath)
    .then((res) => resolve(res))
    .catch((err)=> reject(err))

    // resolve({ 
    //   message: 'La ruta está correcta', 
    //   completePath, 
    //   extension, 
    //   nameExtResult: extresult,
    //   verRoute
    //  });
  });
}

module.exports = {
  mdLinks,
}