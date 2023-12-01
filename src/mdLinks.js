const { isAbsolutePath, convertAbsolute } = require('./function.js');

const mdLinks(path) => {{ 
  return new Promise((resolve) => {
    const completePath = convertAbsolute(path)
    resolve(completePath)     
  }
  return new Promise((resolve, reject) => {
    const VerifyRoute = isAbsolutePath(path)
    
  })
  )}
}
module.exports = {

  mdLinks,
}