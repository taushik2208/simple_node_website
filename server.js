const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer( (req,res) => {
    const qry = url.parse(req.url,true);
    let pth = '.'+qry.pathname;
    if(pth === './') { pth = './index' }
    
    fs.readFile(`${pth}.html`, (err,data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('<h1>404 NOT FOUND</h1>');
        } else {
            res.writeHead(200, {'Content-Type':'text/html'});
            console.log(`Icomming request ===> ${req.url}`);
            res.write(data);
            res.end();
        }
    })

} ).listen(3000);