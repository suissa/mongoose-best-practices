var http = require('http'),
    db = require('./config/db'),
    pages = require('./pages');

http.createServer(function (req, res) {
  pages.index(req, res);
}).listen(8888, '127.0.0.1');