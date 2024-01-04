const { existRoute, readFile, isAbsolutePath, convertAbsolute, extensionName, nameExt } = require('../src/function');

describe('function', () => {
   it('deberia se una ruta parcial', () => {
    const parcial = isAbsolutePath("docs/04-milestone.md");
    expect(parcial).toEqual(false);
  })
  it('deberia se una ruta absoluta', () => {
    const parcial = isAbsolutePath("docs/04-milestone.md");
    expect(parcial).toEqual(false);
  })
  it('deberia se una ruta absoluta', () => {
    const relative = convertAbsolute("docs/04-milestone.md");
    const absoluth = "C:\\Users\\Kotte\\Documents\\GitHub\\DEV011-md-links\\docs\\04-milestone.md"
    expect(relative).toBe(absoluth);
  })
  it('deberia se una ruta absoluta', () => {
    const relative = convertAbsolute("docs/04-milestone.md");
   expect(relative).toBe("C:\\Users\\Kotte\\Documents\\GitHub\\DEV011-md-links\\docs\\04-milestone.md");
  })
  it('comprueba que la ruta existe', () => {
    expect(typeof existRoute).toBe('function')
  })
  it('esta en una funcion', () => {
    expect(typeof readFile).toBe('function')
  });
  it('devuelve una promesa', () => {
    const result = readFile('./src/prueba.md');
    expect(result instanceof Promise).toBe(true);
    expect(typeof result.then).toBe('function');
  });
  it('esta funcion nos da una promesa', () => {
    expect(typeof extensionName).toBe('function')
  })
  it('esta funcion nos da una promesa', () => {
    expect(typeof nameExt).toBe('function')
  })
   
});
