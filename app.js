const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
