const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
  let data = {
    person: {
      firstName: "Silvio"
    },
    address: {
      city: "Berlin",
      country: "Germany",
    }
  }
  data.isCityBerlin = data.city === "Berlin";
  res.render('home', data);
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});
