const { convertAbsolute, extensionName, nameExt, readFile, extractLinks, statsLinks, validateLink } = require('./function.js');
const fs = require('fs');

function mdLinks(route, validate, stats) {
  return new Promise((resolve, reject) => {
    const completePath = convertAbsolute(route);

    if (!fs.existsSync(completePath)) {
      reject(new Error('La ruta es incorrecta'));
    }
    const extension = extensionName(completePath);
    const extresult = nameExt(completePath);

    readFile(completePath)
      .then((data) => {
        const linksExtracted = extractLinks(data, completePath);
        if (validate && stats) {
          // const linksValidate = validateLinks(linksExtracted, stats);
          const linksBroken = statsLinks(linksExtracted, true);
          resolve(linksBroken);
        } else if(validate){
          const linksValidate = validateLink(linksExtracted);
          resolve(linksValidate);
        }
      else if(stats){
        const linksStats = statsLinks(linksExtracted, false)
        resolve(linksStats);
      }else{
        resolve(linksExtracted);
      }
    })
    .catch((err) => reject(err));
});
};

module.exports = {
  mdLinks,
}