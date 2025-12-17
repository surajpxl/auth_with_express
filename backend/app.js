const express = require('express');
const app = express();
const authRouter = require('./Router/authRoute');
const databaseConnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser')
databaseConnect();

// middleware to read JSON body
app.use(express.json());
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter);

// test route
app.use('/', (req, res) => {
    res.status(200).json({ data: 'JWT auth server.' });
});


module.exports = app;
