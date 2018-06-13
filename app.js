const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const animals = [
  { name: "Rex", type: "dog", pictureUrl: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&h=350" },
  { name: "Mac", type: "dog", pictureUrl: "https://i.imgur.com/LkI32wu.jpg"},
  { name: "Nano", type: "dog", pictureUrl: "https://images.pexels.com/photos/101635/pexels-photo-101635.jpeg?auto=compress&cs=tinysrgb&h=350"}
]

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(__dirname + '/views/partials');



app.get('/', (req, res) => {
  let data = {
    pets: animals,
    isHomeActive: "active"
  }
  res.render('home', data);
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/:a/:b/:c', (req, res) => {
  console.log('DEBUG req.params', req.params);
  res.render('about');
});

app.get('/pets/:index', (req, res) => {
  let index = Number(req.params.index);

  if (Number.isNaN(index) || index >= animals.length) {
    res.redirect('/');
  }
  else {
    let data = animals[index];
    res.render('pets/profile', data);
  }
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});