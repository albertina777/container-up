var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var greetingRouter = require('./routes/greeting');

var app = express();

// Set custom header for all requests 

app.use((req, res, next) => { 
  res.setHeader('X-Custom-Header', 'AlbertinaValue'); 
  next(); 
}); 

// Use greetingRouter for requests to /greeting 

app.use('/greeting', greetingRouter); 

app.get('/', (req, res) => { res.send('Hello World'); });

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/greeting', greetingRouter);

// app.use((req, res) => {
//   res.setHeader('X-Custom-Header', 'AlbertinaValue');
// });


module.exports = app;
