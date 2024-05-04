//console.log("hello world")

//const fs = require("fs")

//fs.writeFileSync("hello.text","hello world")

// create a server

const http = require("http")
const routes = require("./routes")

const server = http.createServer(routes)

server.listen(4000,() => {
       console.log("server running at port 4000")
})