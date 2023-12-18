const { convertAbsolute, extensionName, nameExt, readFile, extractLinks} = require('./function.js');
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
    .then((data) =>{
      const linksExtracted = extractLinks(data, completePath)
      resolve(linksExtracted)
    })
    .catch((err)=> reject(err))
  });
}

module.exports = {
  mdLinks,
}