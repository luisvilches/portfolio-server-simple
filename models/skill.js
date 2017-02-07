var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Skills = new Schema({

	skill: String,
	porcentaje: String
});

module.exports = mongoose.model('Skills',Skills);