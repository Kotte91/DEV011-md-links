const path = require('path');

const isAbsolutePath = (route) => path.isAbsolute(route)
const convertAbsolute = (route) => { return isAbsolutePath(route) ? route : path.resolve(route)}
//console.log(convertAbsolute('docs/01-milestone.md'));

module.exports = { 
    isAbsolutePath,
    convertAbsolute,

}