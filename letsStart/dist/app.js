"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    return Server;
}());
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/cats', function (req, res) {
});
app.listen(port, function () {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=app.js.map