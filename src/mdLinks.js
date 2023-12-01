const { convertAbsolute } = require('./function.js');

function mdLinks(path) {
  return new Promise((resolve, reject) => {
    const completePath = convertAbsolute(path);
    resolve(completePath);
  });
}

module.exports = {
  mdLinks,
}