const { validateLink } = require('../src/function');
const axios = require('axios');


jest.mock('axios');


it.only("debe devolver el array valido", (done) =>{
  const array = [{
            href: 'https://www.node.org',
            text: 'Links de node',
            file: 'C:\\Users\\Kotte\\Documents\\GitHub\\DEV011-md-links\\src\\prueba.md',
          }]
  axios.get.mockImplementation(() => Promise.resolve({status:200 , statusText:"OK"}))
  const validate = validateLink(array);
  validate.then((links)=>{
    expect(links).toEqual([{
      href: 'https://www.node.org',
      text: 'Links de node',
      file: 'C:\\Users\\Kotte\\Documents\\GitHub\\DEV011-md-links\\src\\prueba.md',
      status:200,
      statusText:"OK"
    }])
    done();
  })

})
 
