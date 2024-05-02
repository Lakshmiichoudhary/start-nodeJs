//console.log("hello world")

//const fs = require("fs")

//fs.writeFileSync("hello.text","hello world")

// create a server

const http = require("http")

const server = http.createServer((req,res) => {
        console.log("Lakshmi")
})

server.listen(4000)