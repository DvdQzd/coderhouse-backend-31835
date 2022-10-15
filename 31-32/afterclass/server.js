import express from 'express'
// import mongo from 'mongo'

// const client = new MongoServer()
// await client.connect()

const app = express()

app.get('/', (req, res) => {
    setTimeout(() => {
        res.json({ hola: 'mundo' })
    }, 3000)
})

app.get('/abc', (req, res) => {
    res.json({ abc: '123' })
})

app.listen(8080)