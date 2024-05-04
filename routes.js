const requestHandler = (req,res) => {
    if(req.url === "/") {
        const body = []
        req.on('data',()=>{
    
        })
        res.writeHead(200,{"content-Type":"text/html"});
        res.write('<form action="/" method="POST"><input type="text"/><button type="submit">send</button></form>')
        return res.end()
    } else if (req.url === "/about" ) {
        res.writeHead(200, {"content-Type": "text.plain"})
        return res.end("this is about page")
    } else if(req.url === "/node") {
        res.writeHead(200, {"content-Type": "text.plain"})
        res.end("this is node page")
    } else {
        res.writeHead(404)
        res.end("page not found")
    }
}

module.exports = requestHandler
