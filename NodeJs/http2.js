const http = require('http');

const server2 = http.createServer((req,res) =>{
        res.setHeader('Mahek',"Italiya");
        res.end("Welcome to Mahek Italiya Website");
    });
    
    server2.listen(2112,()=>{
        console.log(`server start at http://localhost:2112`);
    });