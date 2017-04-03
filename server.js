var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaStatic = require('koa-static');
var cors = require('./middleware/cors');
var log = require('./middleware/log');
var notFound = require('./middleware/404');

// application routes
require('./middleware/routes')(router);

app
    .use(log)
    .use(koaStatic('static'))
    .use(cors)
    .use(koaBody)
    .use(router.routes())
    .use(router.allowedMethods())
    .use(notFound);

var port = 3311;

app.listen(port);
console.log(`code-challenge server listening on ${port}... Server Listening on port ${port}`);
