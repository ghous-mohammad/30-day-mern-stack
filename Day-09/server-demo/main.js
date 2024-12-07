import http from "https";

const server = http.createServer((req , res ) => {
    if(req.url == "/"){
        res.write("hello")
        res.end();
    }
    else {
        res.write("404 - not found");
        res.end();
    }
})

server.listen(3000)