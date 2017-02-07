const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
	correo: String,
	password: String
});

module.exports = mongoose.model('User',User);