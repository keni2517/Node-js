const http = require('http');

const server1 = http.createServer((req,res) =>{
        res.setHeader('shubham',"kakadiya");
        res.end("Welcome to Shubham Kakadiya Website");
    });
    
    server1.listen(1612,()=>{
        console.log(`server start at http://localhost:1612`);
    });