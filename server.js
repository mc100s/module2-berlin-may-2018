const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log("DEBUG request.url", request.url);
    if (request.url === "/") {
      response.write('Hello world!');
    } else if (request.url === "/city") {
      response.write('Hello Berlin!');
    } else {
      response.statusCode = 404;
      response.write('404 Page');
    }
    response.end();
  });

server.listen(3000);