"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    database: "some_db",
    dialect: "sqlite",
    storage: ":memory:",
});
//# sourceMappingURL=database.js.map