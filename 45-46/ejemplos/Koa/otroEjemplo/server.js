const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());

app.use(async ctx => {
    console.log('ctx.request', ctx.request);

    console.log(ctx.request.body);

    ctx.body = 'Hello World';
});

app.listen(3000);