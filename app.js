'use strict';

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let lessMiddleware = require('less-middleware');
let http = require('http');
let mysql = require('mysql');
let AdminClass = require('./routes/admin');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


let config = require('./config/index')();


let connection = mysql.createConnection({
    host: config.host,
    user: config.user_name,
    password: config.password,
    database: config.databse_name
});

// start http server
http.createServer(app).listen(config.port, function () {
    console.log('listening to port: ' + config.port);

});


app.use('/admin', function(req, res, next) {
    let admin = new AdminClass('admin');
    admin.run(req, res, next);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    //
    // // render the error page
    // res.status(err.status || 500);
    // res.render('error');
});

// connection.connect(function (err) {
//     if (err) {
//         console.log('Error: Database connection is not established.');
//         console.log('Details: ' + err.message);
//     } else {
//
//         // start http server
//         http.createServer(app).listen(config.port, function () {
//             console.log('listening to port: ' + config.port);
//
//         });
//
//
//         app.use('/admin', function(req, res, next) {
//             let admin = new AdminClass('admin');
//             admin.run(req, res, next);
//         });
//
//         // catch 404 and forward to error handler
//         app.use(function (req, res, next) {
//             var err = new Error('Not Found');
//             err.status = 404;
//             next(err);
//         });
//
//         // error handler
//         app.use(function (err, req, res, next) {
//             // set locals, only providing error in development
//             res.locals.message = err.message;
//             res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//             // render the error page
//             res.status(err.status || 500);
//             res.render('error');
//         });
//
//
//     }
// });

module.exports = app;
