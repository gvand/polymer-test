const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const routes = require('./routes/router');
const logger = require('./lib/logger');
const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 8083);
app.set('etag', false);
app.set('maxAge', 86400000);

app.disable('x-powered-by');
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.hsts({force: true, maxAge: 7776000000}));
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.ieNoOpen());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(compression());

if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
}

app.get('/diagnostics/heartbeat', (req, res) => {
    res.sendStatus(200);
});

app.use( (req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    next();
});

routes.load(app, './controllers', logger);

app.use( (err, req, res, next) => {
    let status = (err.status) ? err.status : 503;
    if (status.toString().startsWith(4)) {
        logger.info(`${err.name}, ${err.message}`);
    } else {
        logger.error(err.stack);
    }
    res.sendStatus(status);
});

app.use(function (req, res, next) {
    // TODO: return 404
    res
    // .status(404)
        .send(`Route not found: ${req.url}`);
});

app.use(function (err, req, res, next) {
    // console.error(err.stack)
    res
    // .status(500)
        .send(`Some error happened: ${err.stack}`);
});

app.listen(app.get('port'), app.get('host'), error => {
    if (error) {
        logger.error(error);
    } else {
        logger.info(`Server listening at ${app.get('host')}:${app.get('port')}`);
    }
});

process.once('SIGUSR2', () => {
    process.kill(process.pid, 'SIGUSR2');
});
