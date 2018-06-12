const express = require('express');

let counter = 0;
console.log("A");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

console.log("B");


// our first Route
app.get('/', (request, response) => {
  console.log("R1");
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/animals/:name', (request, response) => {
  counter++;
  console.log("R2");
  console.log(request.params);
  let name = request.params.name;
  response.send(`
    <html>
    <head>
      <title></title>
    </head>
    <h1>Hi I'm ${name}!</h1>
    <p>This page has been displayed ${counter} times</p>
  `);
});

console.log("C");



// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

console.log("D");
