import http from 'http'
import process from 'process'
import data from '../data/db.json' with { type: 'json' }

const PORT = process.env.PORT

const app = http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}`
    const parsedURL = new URL(req.url, baseURL)
    const path = parsedURL.pathname

    //Set CORS headers to allow request from my app
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

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
    console.log(`Server is running on port ${PORT}`)
})