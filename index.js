const express = require('express');
const path = require('path');

const app = express();

// Sets up ejs templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client'));

app.use(express.static(path.join(__dirname, 'client')));
app.use("/blog", express.static(path.join(__dirname, 'client/hexo_blog/public')))

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/calculator", (req, res) => {
  res.render("pages/calculator");
});

app.get("*", (req, res) => {
  res.render("pages/notfound");
});

// Begin serving
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server listening on ${port}`);