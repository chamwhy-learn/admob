const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('/index.html', 'utf8', (file) => {
        res.sendFile(file);
    });
});


app.listen(port, () => {
    console.log(`this server is opend at ${port}!`);
});
