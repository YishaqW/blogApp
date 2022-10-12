const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
const PORT = 3000

// ==== Mount Middleware ==== (app.use)
app.use(morgan('dev')) 
app.use(express.json())

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))

app.get('/', (req, res) => {
    res.render('Pages/HomePage')
})


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
      // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
      // confirm that we have a connection to MongoDB
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });
})