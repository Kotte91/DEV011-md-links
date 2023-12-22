const { convertAbsolute, extensionName, nameExt, readFile, extractLinks, validateLink} = require('./function.js');
const fs = require( 'fs' );

function mdLinks(route, validate, status) {
  return new Promise((resolve, reject) => {
    const completePath = convertAbsolute(route);

    if (!fs.existsSync(completePath)) {
      reject('La ruta es incorrecta');
    }
    // const statusLink = status()
    const extension = extensionName(completePath);
    const extresult = nameExt(completePath);
    
    readFile(completePath)
    .then((data) => {
      const linksExtracted = extractLinks(data, completePath)
      if  (validate) {
        const linkValidate = validateLink(linksExtracted)
        resolve(linkValidate)
      }else {
        resolve(linksExtracted)
      }
            
    })
    .catch((err)=> reject(err))
  });
}

module.exports = {
  mdLinks,
}