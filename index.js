//greated folder then file index.js
//npm init -y
//sudo npm install express ejs

// I push it wrong repo:
// git remote remove origin
// git remote add origin https://github.com/JoanneOs/ALAB31821.git
// git branch -M main
// git push -u origin main
// now my code will go to the right repo.

//mkdir -p public/images public/css views
//touch views/home.ejs views/about.ejs index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Custom middleware example
app.use((req, res, next) => {
    console.log(`Request received at: ${new Date()}`);
    next();
  });

  // Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
  });
  
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
  });
  
  app.post('/submit-form', (req, res) => {
    console.log('Form submitted:', req.body.username);
    res.send(`Hello, ${req.body.username}!`);
  });
  
  app.get('/download-image', (req, res) => {
    const imagePath = path.join(__dirname, 'public/images/sample.jpg');
    res.download(imagePath);
  });
  
  // Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});