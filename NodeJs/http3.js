const http = require('http');

const server3 = http.createServer((req,res) =>{
        res.setHeader('Mansi',"Vaghasiya");
        res.end("Welcome to Mansi Vaghasiya Website");
    });
    
    server3.listen(3107,()=>{
        console.log(`server start at http://localhost:3107`);
    });