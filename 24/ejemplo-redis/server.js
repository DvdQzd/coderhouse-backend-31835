const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');

app.use(cookieParser());

const client = redis.createClient({ legacyMode: true });

client.connect().catch(console.error);

const RedisStore = require('connect-redis')(session);

app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 60
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    // }
}));



app.get('/', (req, res) => {
    if (req.query.name) {
        if (req.session.visitas) {
            req.session.visitas++;
            res.send(`${req.query.name} visitaste la página ${req.session.visitas} veces`);
        } else {
            req.session.visitas = 1;
            res.send(`Bienvenido ${req.query.name}`);
        }
        
    } else {
        res.send('Te damos la bienvenida');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));






// app.use(session({
//     store: new RedisStore({
//         url: 'redis-17059.c246.us-east-1-4.ec2.cloud.redislabs.com',
//         port: 17059,
//         pass: 'hSBQJr2jjfjGL9Rk6u9pNT1eu1Jy5cWi',
//         client: client,
//         ttl: 300
//     }),
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     // cookie: {
//     //     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//     // }
// }));