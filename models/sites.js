var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sites = new Schema({

	nombre: String,
	url: String,
	tecnologias: String,
	urlImage: String,
	categoria: String

});

module.exports = mongoose.model('site',sites);