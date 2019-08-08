const express = require('express');
const app = express();
app.use(require("./routes"));

app.use((req, res) => {
    res.status(404).send('unknown request');
});

app.listen(8000, () => {
    console.log('app running on Port 8000');
})