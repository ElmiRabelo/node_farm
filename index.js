const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const pathName = req.url;
	
	if( pathName === '/' || pathName === '/overview') {
		res.end("Está é a pagina de Overview");
	} else if(pathName === '/projects') {
		res.end('Está é a pagina de Projetos')
	} else {
		res.writeHead(404, {
			'Content-type': 'text/html'
		});
		res.end('<h1>Page not Found</h1>');
	}
	
});

server.listen(8000, '127.0.0.1', () => console.log('Atento a porta 8000'));