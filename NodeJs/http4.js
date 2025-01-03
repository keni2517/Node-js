const http = require('http');

const server4 = http.createServer((req,res) =>{
        res.setHeader('Srusti',"kathiriya");
        res.end("Welcome to Srusti Kathiriya Website");
    });
    
    server4.listen(1073,()=>{
        console.log(`server start at http://localhost:1073`);
    });