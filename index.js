const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');

app.use(require("./routes"));
app.use((req, res) => {
    res.status(404).send('unknown request');
});
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json);

app.listen(8000, () => {
    console.log('app running on Port 8000');
})