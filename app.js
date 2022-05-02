const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const {errorHandler} = require('./errors/errorHandler')

const PORT = process.env.PORT || 3000

const app = express()
app.use( express.static('public') )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// app.use('/users', routes.users);
app.use('/api', routes.auth);
app.use('/api/tasks', routes.tasks);
app.use('/api/users', routes.users);
app.use('/api/images', routes.images)
app.use( errorHandler )

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})