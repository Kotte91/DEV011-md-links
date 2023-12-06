const path = require('path');
const fs = require('fs');

const isAbsolutePath = (route) => path.isAbsolute(route)
const convertAbsolute = (route) => { return isAbsolutePath(route) ? route : path.resolve(route)}
const exisistRoute = (route) => fs.existsSync(route)
const extencionName = (route) => path.extname(route)

//console.log(extencionName);

module.exports = { 
    isAbsolutePath,
    convertAbsolute,
    exisistRoute,
    extencionName,

}