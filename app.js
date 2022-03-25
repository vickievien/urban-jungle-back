const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log(`mongo connected: ${process.env.MONGO_URI}`));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('short'));
app.use(cors());

const plantController = require('./controllers/plantController');
app.use('/plants', plantController);
// NEED SOMETHING THAT ROUTES TO JUST '/' FOR HEROKU


app.listen(3001, ()=> {
    console.log('Port 3001 running');
})