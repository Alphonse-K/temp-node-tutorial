const http = require('http')

const server = http.createServer((req, res) => {
if(req.url === '/') {
res.end('Welcome to our home page')
}
if(req.url ==='/about') {
    res.end('Here is our short history to give a brief insight about who we are and what are our motivations. Enjoy your reading')
}
res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page your looking for</p>
    <a href='/'>Go to home</a>
`)
})

server.listen(8000)