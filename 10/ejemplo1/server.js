const express = require('express');
const app = express();


app.set('views','./views');
app.set('view engine', 'pug');


app.get('/hello', (req, res) => {
    res.render('hello.pug', { mensaje: 'Probando PUG con Express' })
})

app.listen(8080, () => console.log('servidor OK'))

