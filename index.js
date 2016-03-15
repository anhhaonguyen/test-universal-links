'use strict';

var express = require('express'),
    app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8000, 'localhost', function() {
    console.log('localhost:8000');
});