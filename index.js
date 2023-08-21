var express = require('express')
var cors = require('cors')
require('dotenv').config()
var app = express()
app.use(cors())

const mysql = require('mysql2') 
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
})


app.get('/hello-world', function (req, res, next) {
  res.json({msg: 'hello world'})
})

app.get('/city',function(req, res, next){
    pool.query("SELECT * FROM world.city",function(err,rows,field){
        res.json(rows)
    })
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})

