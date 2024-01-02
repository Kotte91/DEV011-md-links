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
          status: error.response ? error.response.status : undefined,
          statusText: error.response ? error.response.statusText : undefined,
        };
      });
  });
  return Promise.all(arrObjsModificado);
};


const stats = (route) => {
  const uniqueLinks = route.filter((route, index) => {
    return route.indexOf(route) === index;
  })

    return {
      Total: route.length,
      Unique: uniqueLinks.length
    }
};
const statsWithValidate = (validateLink) => {
  const uniqueLinks = validateLink.filter((link, index) => link.indexOf(link) === index);
  const brokenLinks = validateLink.filter((link) => link.status === undefined);
  const unbrokenLinks = validateLink.filter((link) => link.status !== undefined);

  return {
    Total: validateLink.length,
    Unique: uniqueLinks.length,
    Active: unbrokenLinks.length,
    Broken: brokenLinks.length,
  };
};


module.exports = {
  isAbsolutePath,
  convertAbsolute,
  existRoute,
  extensionName,
  nameExt,
  readFile,
  extractLinks,
  validateLink,
  stats,
  statsWithValidate
};

