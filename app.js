//console.log("hello world")

//const fs = require("fs")

//fs.writeFileSync("hello.text","hello world")

// create a server

const http = require("http")

const server = http.createServer((req,res) => {

       if(req.url === "/") {
              res.writeHead(200,{"content-Type":"text/plain"});
              res.end("home Page")
       } else if (req.url === "/about") {
              res.writeHead(200, {"content-Type": "text.plain"})
              res.end("this is about page")
       } else if(req.url === "/node") {
              res.writeHead(200, {"content-Type": "text.plain"})
              res.end("this is node page")
       } else {
              res.writeHead(404)
              res.end("page not found")
       }
})

server.listen(4000,() => {
       console.log("server running at port 4000")
})