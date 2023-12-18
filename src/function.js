const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { JSDOM } = require('jsdom');
const axios = require('axios');

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

axios.get('prueba.md')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))

const extractLinks = (data, file) => {
  const arrObjs = []
  const html = marked.parse(data)
  const dom = new JSDOM(html);
  const nodeListA = dom.window.document.querySelectorAll("a")
  // console.log(nodeListA.length);
  nodeListA.forEach((anchor)=>{ //<a> anchor
    arrObjs.push(
      {
        href: anchor.href,
        text: anchor.textContent,
        file,
      }
    )
  })


  return arrObjs
}

module.exports = {
  isAbsolutePath,
  convertAbsolute,
  existRoute,
  extensionName,
  nameExt,
  readFile,
  extractLinks
};

