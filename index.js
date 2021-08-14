const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')


const errorController = require('./controllers/error')
const mongoConnect = require('./util/database')

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs')
app.set('views', 'views')

// const adminRoutes = require('./routes/admin.js')
// const shopRoutes = require('./routes/shop.js')
  
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

// app.use('/admin', adminRoutes)
// app.use(shopRoutes)

app.use(errorController.get404)

mongoConnect(client => {
  console.log(client)
  app.listen(3000)
})