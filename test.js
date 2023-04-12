var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
http.createServer(function (req, res) {
    // This simulates an operation that takes 500ms to execute
    setTimeout(function () {
        proxy.web(req, res, {
            target: 'http://localhost:8081'
        });
    }, 100);
}).listen(8008);