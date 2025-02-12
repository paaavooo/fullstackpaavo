const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hello, World!</h1>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Page</h1>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});
