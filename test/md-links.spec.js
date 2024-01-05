const { existRoute, readFile, isAbsolutePath, convertAbsolute, extensionName, nameExt, extractLinks, statsLinks } = require('../src/function');

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
  it('readFile se rechaza correctamente para un archivo inexistente', async () => {
    await expect(readFile('/ruta/inexistente.txt')).rejects.toMatch('Hay un error con la lectura del archivo');
  });
  
  it('esta en una funcion', () => {
    expect(typeof extensionName).toBe('function')
  })
  it('esta en una funcion', () => {
    expect(typeof nameExt).toBe('function')
  })
  it('retorna true para una ruta con extencion valida', ()=>{
    const resultado = nameExt('/ruta/al/archivo.md');
    expect(resultado).toBe(true)
  })
   
  it('retorna "archivo Invalido" para una ruta con extencion no valida', ()=>{
    const resultado = nameExt('/ruta/al/archivo.txt');
    expect(resultado).toBe('archivo inválido')
  })
  it('Retorna "archivo inválido" para una ruta sin extensión', () => {
    const result = nameExt('/archivo_sin_extension');
    expect(result).toBe('archivo inválido');
  });
  it('extractLinks retorna un array de objetos para datos HTML válidos', () => {
    const data = '<a href="https://ejemplo.com/">Enlace de ejemplo</a>';
    const file = '/src/prueba.md';
    const result = extractLinks(data, file);
    expect(result).toEqual([{ href: 'https://ejemplo.com/', text: 'Enlace de ejemplo', file }]);
  });
  
  it('statsLinks devuelve estadísticas correctas para array de enlaces sin validación', async () => {
    const arrObjs = [
      { href: 'https://ejemplo1.com', text: 'Enlace 1', file: '/ruta/al/archivo.md' },
      { href: 'https://ejemplo2.com', text: 'Enlace 2', file: '/ruta/al/archivo.md' },
    ];
    const result = await statsLinks(arrObjs, false);
    expect(result).toBe('Total: 2\nUnique: 2');
  });
});
