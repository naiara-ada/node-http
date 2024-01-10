const {getData} = require ('./data.js')
const http = require('node:http')
const data = getData();

const template = `${data.title}
                <h2>${data.subtitle}</h2>
                <p>${data.description}</p>`

const server = http.createServer((req, res) =>{
    console.log('request received');
    res.end(template);
})

server.listen(0, () =>{
    console.log(`server listening on port http://127.0.0.1:${server.address().port}`)
})