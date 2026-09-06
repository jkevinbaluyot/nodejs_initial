const fs = require('fs');

function requestHandler(req, res){
    const url = req.url;
    const method = req.method;
    const users = ['User1', 'User2']

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Good Morning</title></head>')
        res.write('<body>')
        res.write('<ul>')
        for (let user of users){
            res.write("<li>"+ user +"</li>")
        }
        res.write('</ul>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button>Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // These are callbacks. Wont run immediately but in the future
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message)
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        return;
    }
    return res.end();



    res.write('<html>')
    res.write('<head><title>Hello World</title></head>')
    res.write('<h1>Hello World</h1>')
    res.write('</html>')

}

// Export 1 thing only
// module.exports = requestHandler; 

module.exports = {
    handler: requestHandler,
    someText: 'Hard Code Text'
};