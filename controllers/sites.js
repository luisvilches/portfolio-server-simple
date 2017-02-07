var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var multer = require('multer');
var site = require('.././models/sites');



exports.addsites = function(req,res){

		var data = new site({

			nombre: req.body.name,
			url: req.body.url,
			tecnologias: req.body.tecnologia,
			urlImage: req.body.urlimg,
			categoria: req.body.categoria
		});

		cloudinary.uploader.upload(req.file.path,
			function(result){
				data.urlImage = result.url;

				data.save(function(err,data){
				if (err) {console.log(err);
				}else{console.log(data);}
				res.render('admin/admin');
			});
		});
	}