const promClient = require('prom-client');
const express = require('express');
const app = express();

// Middleware to add custom headers
const customHeadersMiddleware = (req, res, next) => {
  const customHeader = 'X-Custom-Header';
  const customHeaderValue = 'AlbertinaValue';
  res.setHeader(customHeader, customHeaderValue);
  next();
};

// Use the custom headers middleware
app.use(customHeadersMiddleware);

// app.use('/greeting', greetingRouter); 

app.get('/', (req, res) => { res.send('Hello World'); });

// Collect default metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics({ timeout: 5000 });

// Define the metrics endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(promClient.register.metrics());
});

module.exports = app;
