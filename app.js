const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/'){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<h1>Index Sayfasi</h1>")
    } else if (url === '/hakkinda') {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<h1>Hakkimda Sayfasi</h1>");
    } else if (url === '/iletisim') {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<h1>Iletisim Sayfasi</h1>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html"});
        res.write("<h1>Sayfa bulunamadi!</h1>");
    }


    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});