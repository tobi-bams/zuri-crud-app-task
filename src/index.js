const express = require('express');

const app = express();

app.use(express.json()) 
const port = process.env.PORT || 5000

// db setup
const dbsetup = require('./database/setup');
dbsetup();


// User Routes
const userRoutes = require('./routes/userRoutes');

app.use(userRoutes)
app.listen(port);