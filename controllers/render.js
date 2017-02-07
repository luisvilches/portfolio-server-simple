var User = require('.././models/user');

exports.login = function(req,res,next){
	res.render('login');
}

exports.index = function(req,res,next){
	res.redirect('/admin/menu')
}

exports.menu = function(req,res,next){
	res.render('menu')
}

exports.addsite = function(req,res,next){
	res.render('addsite')
}

exports.addskill = function(req,res,next){
	res.render('addskill')
}

exports.iniciarSesion = (req,res,next) => {
	User.findOne({correo: req.body.correo, password: req.body.password },(err,user)=>{
		if (err) {
			console.log('ERROR: '+err);
		}
		else{
			req.session.user_id = user._id;
			console.log(req.session.user_id);
			res.redirect('/admin/menu');
			//res.send('hola');
		}
	})
}