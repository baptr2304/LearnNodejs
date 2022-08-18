const express = require('express')
const path = require('path')
const morgan = require('morgan')

const handlebars = require('express-handlebars')  
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources\\views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/products', (req, res) => {
  res.render('products')
})
app.get('/accounts', (req, res) => {
  res.render('accounts')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})