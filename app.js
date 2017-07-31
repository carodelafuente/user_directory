const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const data = require('./models/data');
const app = express();
const userRoute = require('./routes/users');
const indexRoute = require('./routes/index');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoute);

app.use(userRoute);

app.listen(3000, function(){
});
