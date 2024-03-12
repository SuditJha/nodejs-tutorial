const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// Middleware - The function that gets executed before any route
app.use(function(req, res, next){
    // console.log(req)
    next()
})



// Routes
app.get('/', (req, res) => {
    res.render('index')
  })
  

app.get('/profile', (req, res) => {
  res.send('Hello Profile World!')
})

// Request Parameters
// /profile/harsh  ---> /profile/:username
// /profile/ankit ----> /profile/:username
// /profile/harshita -> /profile/:username
// When we have to make a route dynamic we use -- ':' -- at the place we want to make it dynamic
// To access the value we use req.params.parameter
// Example
app.get('/profile/:username', function(req, res){
  res.send(`Hello From ${req.params.username}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})