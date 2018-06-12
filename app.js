const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/animals/mac', (request, response) => {
  console.log(request);
  response.send(`
    <h1>Hi I'm Mac!</h1>
    <img src="/images/mac.jpg">
  `);
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});