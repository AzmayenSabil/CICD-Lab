const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome Azure Application')
})

app.listen(process.env.PORT, () => {
    console.log('listening on 8000')
})
