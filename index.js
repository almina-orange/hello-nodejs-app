var http = require('http')
var PORT = process.env.PORT || 5000

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Hello World\n")
}).listen(PORT, () => console.log(`Listeing on ${PORT}`))