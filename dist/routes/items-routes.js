"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var itemsRouter = express_1.Router();
itemsRouter.get('/', function (req, res) {
    res.json([{ name: "fd" }, { name: "re" }]);
});
itemsRouter.get('/:id', function (req, res) {
    res.json({ name: "fd." });
});
exports.default = itemsRouter;
//# sourceMappingURL=items-routes.js.map