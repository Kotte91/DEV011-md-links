const mdLinks = require('../');
const { existRoute } = require('../src/function');


describe('mdLinks', () => {

  it('esta es una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

});

describe('existRoute', () => {
  it('comprueba que la ruta existe', () => {
    expect(typeof existRoute).toBe('function')
  })
})

// describe('mdLinks', () => {
//   it('debería resolver un arreglo con 3 links para un archivo .md con 3 links', () => {
//     return mdLinks('miArchivo.md').then((result) => {
//       expect...;
//     });
//   });
// });
