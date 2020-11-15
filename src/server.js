var http = require('http');
const PORT = process.env.WEB_APP_PORT || 8080;

http.createServer(function (request, response) {
    response.write(request.url);
	response.end();

	var ip = request.headers['x-forwarded-for'] || 
		request.connection.remoteAddress || 
		request.socket.remoteAddress ||
		(req.connection.socket ? req.connection.socket.remoteAddress : null);

	console.log(ip)
    return;
}).listen(PORT);