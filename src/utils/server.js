const express = require('express');
const cookieParser = require('cookie-parser');
const movieRoutes = require('../routes/movies');

function createServer() {
    const app = express();
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/movies', movieRoutes);
    return app;
}

module.exports = createServer;