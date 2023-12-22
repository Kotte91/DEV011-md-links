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

const validateLink = (arrObjs = []) => {
  const arrObjsModificado = arrObjs.map((element) =>{
    return axios.get(element.href)
    .then((response) => {
      return {
        ...element,
        status: response.status,
        statusText: response.statusText,
      }
     })
    .catch((error) => {
      return {
        ...element,
        status: error.response.status,
        statusText: error.response.statusText
      }
    })
  })
  return Promise.all(arrObjsModificado);
}

module.exports = {
  isAbsolutePath,
  convertAbsolute,
  existRoute,
  extensionName,
  nameExt,
  readFile,
  extractLinks,
  validateLink,
};

