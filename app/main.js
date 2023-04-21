const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require("cors")
const app = express();
const routers = require('./routes');

const expressParserJsonMiddleware = function (config) {
    return function (req, res, next) {
        if (req.is('multipart/form-data')) {
            return next();
        }
        return express.json(config)(req, res, next);
    };
};
const expressParserUrlMiddleware = function (config) {
    return function (req, res, next) {
        if (req.is('multipart/form-data')) {
            return next();
        }
        return express.json(config)(req, res, next);
    };
};

app.use(logger('dev'));
// app.use(bodyParser.raw({ limit: "50mb", extended: true }))
app.use(expressParserJsonMiddleware());
app.use(expressParserUrlMiddleware({ extended: false }));
app.use(cookieParser());
app.use(cors({ exposedHeaders: "*" }));
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    secure: true
}))

// console.log(process.env.NODE_ENV)

routers.getRouters().map((route, i) => {
    app.use(route.baseUrl, route.router);
})




app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.error(err)
    res.status(err.status).json("err happend");
});

module.exports = app;
