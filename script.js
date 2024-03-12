const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'ejs')


app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
})