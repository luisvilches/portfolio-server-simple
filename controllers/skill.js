var bodyParser = require('body-parser');
var Skills = require('.././models/skill');

exports.addskills = function(req,res){

		var data = new Skills({

			skill: req.body.skill,
			porcentaje: req.body.porcentaje,
		});
			data.save(function(err,data){
			if (err) {console.log(err);
			}else{console.log(data);}
			res.status(200);
			res.end();
		});
	}

exports.addSkill = function(req,res){
		res.render('admin/addskills');
	}
