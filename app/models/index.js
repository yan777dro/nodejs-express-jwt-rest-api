const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
//a user can be  a simple user or also have admin or moderator roles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;