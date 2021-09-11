"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.get('/player', function (req, res) {
    res.send('Les joueurs');
});
app.get('/team', function (req, res) {
    res.send('Les équipes!!');
});
app.get('/', function (req, res) {
    res.send('The sedulous hyena ate the antelope.');
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
//# sourceMappingURL=app.js.map