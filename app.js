const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 3000

const app = express()
app.use( express.static('public') )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// app.use('/users', routes.users);
app.use('/', routes.auth);
app.use('/tasks', routes.tasks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})