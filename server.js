var models = require('./db')
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var nunjucks = require('nunjucks');
var orders = require('./routes/orders');
var methodOverride = require('method-override');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});

app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/orders', orders);

app.get('/', (req, res, next)=>{
  models.Product.findAll()
    .then((products)=>{
      res.render('index', {products})
    })
})

app.listen(port, (req, res, next) => {
  console.log('listening...')
});
