const fs = require('fs');
const path = require('path');

const isAbsolutePath = (route) => path.isAbsolute(route);
const convertAbsolute = (route) => (isAbsolutePath(route) ? route : path.resolve(route));
const existRoute = (route) => fs.existsSync(route);
const extensionName = (route) => path.extname(route);

const nameExt = (route) => {
  const validExtensions = [".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text"];
  const fileExtension = extensionName(route);

  return validExtensions.includes(fileExtension) ? true : 'archivo inválido';
};

const readFile = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (err, data)=>{
      if(err) reject('Hay un error con la lectura del archivo')
      resolve(data)
    })
  })
}

const extractLinks = (data) => {

}

module.exports = {
  isAbsolutePath,
  convertAbsolute,
  existRoute,
  extensionName,
  nameExt,
  readFile
};

