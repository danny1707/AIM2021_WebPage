const express = require ('express');
const app = express()
const path = require('path');

const morgan = require('morgan');
app.use(morgan('tiny'));

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const history = require ('connect-history-api-fallback');
app.use(history());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log('Executing API')
});