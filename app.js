const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'My Website' });
});

app.listen(port, () => {
    console.log(`Website running at http://localhost:${port}`);
});
