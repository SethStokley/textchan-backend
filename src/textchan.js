const config = require('../config/textchan.json');
const restify = require('restify');
const createServer = require('./routes');
const pino = require('./utils/pino');
const corsMiddleware = require('restify-cors-middleware');

// route bootstrap, creates server and adds routes from routes/routes.js
const server = createServer({name: 'Textchan'});
// middleware
const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
});
server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use(require('./middleware/jsonOnlyPost'));

server.listen(config.server.port, () => {
    pino.info(`Server is listening on port ${config.server.port}`);
});