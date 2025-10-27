const http = require('http')
const url = require('url')
const data = require('../data/db.json')

const PORT = 5000

const app = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    const path = parsedURL.pathname

    //Set CORS headers to allow request from my app
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    if (path === '/' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end('Server is running.....')
    } else if (path === '/NFTs' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(data.NFTs))
    } else if (path === '/Creators' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(data.Creators))
    } else if (path === '/Collections' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(data.Collections))
    } else if (path === '/Blogs' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(data.Blogs))
    } else if (path.startsWith('/NFTs/') && req.method === 'GET') {
        const itemID = path.split('/')[2]
        const item = data.NFTs.find(nft => nft.id === itemID)

        if (item) {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(item))
        } else {            
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end(`Item not Found ${itemID}`)
        }
    } else if (path.startsWith('/Creators/') && req.method === 'GET') {
        const itemID = path.split('/')[2]
        const item = data.Creators.find(creator => creator.id === itemID)

        if (item) {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(item))
        } else {            
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end('Item not Found')
        }
    } else if (path.startsWith('/Collections/') && req.method === 'GET') {
        const itemID = path.split('/')[2]
        const item = data.Collections.find(collection => collection.id === itemID)

        if (item) {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(item))
        } else {            
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end('Item not Found')
        }
    } else if (path.startsWith('/Blogs/') && req.method === 'GET') {
        const itemID = path.split('/')[2]
        const item = data.Blogs.find(blog => blog.id === itemID)

        if (item) {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(item))
        } else {            
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end('Item not Found')
        }
    } else {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end('Not Found')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})