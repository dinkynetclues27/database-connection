const sequelize = require('./database');
const Student = require('./methods/student');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/route');
const app = express();
app.use('/', routes);

sequelize.sync() 
    .then(() => {
        console.log('Models synced successfully.');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Unable to sync models:', err);
    });

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
