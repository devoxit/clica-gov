const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
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



routers.getRouters().map((route, i) => {
    app.use(route.baseUrl, route.router);
})



// app.all('/signin', (req, res) => {
//     console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", req.body)


// axios.post("http://localhost:8080/api/v1/auth/signin", req.body)
// axios({
//     url: "http://localhost:8080/api/v1/auth/signin",
//     headers: req.headers,
//     method: "post",
//     data: req.body
// })
//     headers = {
//         cookie: req.headers["cookie"],
//         authorization: req.headers["authorization"],
//         'content-type': req.headers["content-type"]
//     }
//     axios({
//         method: 'post',
//         url: "http://localhost:8080/api/v1/auth/signin",
//         data: req.body,
//         params: req.params,
//         headers,
//     }).then(result => {
//         res.set(result.headers)
//         res.json(result)
//     }).catch(err => {
//         let error = err.response.data
//         return res.status(error.status).json(error)
//     })
// })
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.error(err)
    res.json(err);
});

module.exports = app;
