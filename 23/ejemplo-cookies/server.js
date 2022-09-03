//Librerias
const express = require('express')
const cookieParser= require('cookie-parser');
//Constantes
const app = express()
//Definicion de puerto
app.set('PORT', process.env.PORT || 8080);
//middleware's
app.use(cookieParser(['secret', 'banana', 'apple']))
// Listener del Server
app.listen(app.get('PORT'), ()=>{
    console.log(`El server esta vivo en el puerto : ${app.get('PORT')}`)
})

// Rutas
app.get("/set",(req,res)=>{
    res.cookie('server','express', { signed: true }).send('Cookie Set')
})

app.get("/set3",(req,res)=>{
    res.cookie('server3','express3', { signed: true }).send('Cookie Set')
})

app.get('/setEX',(req,res)=>{
    res.cookie('server2','express2',{ maxAge: 30000, signed: true }).send('Cookie SetEX')
})

app.get('/get', (req,res)=> {
    res.send({
        cookies: req.cookies,
        signedCookies: req.signedCookies
    })
})


// for ... of
for (const cookieName of Object.keys(req.cookies)) {
    res.clearCookie(cookieName)
  }


app.get('/clr', (req,res)=>{
    res.clearCookie('server').send('Cookie Clear')
})
