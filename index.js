const express = require('express')
const app = express()

app.use('*', (req, res, next) => {
    res.send('<h1>Hello from CICD kubernetes F!!!!!</h1>')
})

app.listen(4000, () => {
    console.log('Express app listening on port 4000')
})
