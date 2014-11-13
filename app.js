var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');

var mysql = require('mysql'),
    mysqlUtilities = require('mysql-utilities');

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'chatio',
    port        : 3306
});

connection.connect(function(err) {
    if(err != null){
        console.log('err', err );
    } else {
        console.log('Connected!')
    }
});

mysqlUtilities.upgrade(connection);
mysqlUtilities.introspection(connection);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.session());
//app.use(express.cookieDecoder());

app.use('/', routes);
app.use('/users', users);

app.use('/models', __dirname + '/models');

//include the maps controller
var users = require('./controllers/user/user_ctrl.js');
//app.<REQUEST_METHOD>(<REQUEST_URI>, <CONTROLLER_METHOD>)
app.get('/api/signup', users.create_user);
app.post('/api/signup', users.create_user);
app.get('/api/signin', users.signIn);
app.post('/api/signin', users.signIn);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
