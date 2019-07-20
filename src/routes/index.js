const restify = require('restify');
const Router = require('restify-router').Router;  

function createServer(options) {
    // create server
    const server = restify.createServer(options);
    // container router for /api prefix
    containterRouter = new Router();
    // add routers
    containterRouter.add('', require('./board.routes'));
    containterRouter.add('', require('./thread.routes'));
    containterRouter.add('', require('./post.routes'));
    // apply router to server
    containterRouter.applyRoutes(server, '/api');

    return server;
}

module.exports = createServer;