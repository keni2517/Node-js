
const http = require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('Dummy',"Dummy values");
    res.end("Welcome to Keni Kakadiya Website");
});

server.listen(2609,()=>{
    console.log(`server start at http://localhost:2609`);
});

// const server1 = http.createServer((req,res) =>{
//     // res.setHeader('keni',"kakadiya");
//     res.end("Welcome to Shubham Kakadiya Website");
// });

// server1.listen(1612,()=>{
//     console.log(`server start at http://localhost:1612`);
// });