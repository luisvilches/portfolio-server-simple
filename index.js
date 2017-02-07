const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const method = require('method-override')
const cloudinary = require('cloudinary')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

require('events').EventEmitter.defaultMaxListeners = Infinity;

let app = express()
let port = process.env.PORT || 8000

const uploader = multer({dest: "./uploads"});
const router = require('./routes')
const session = require('./middleware/session')

app.set('Views', path.join(__dirname,'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));  
app.use(cors());  
app.use(cookieSession({
	name: 'login',
	keys: ['efd3uhvt354yt835t430v4t0985u4t93', 'vuhf84yt82y4r098u0r98y47t8y5ct87yf']
}));

app.use('/admin',session);
app.use('/', router)

/////// CONECCION BASE DE DATOS ///////////////

mongoose.connect('mongodb://portafolio:andres2230@ds153765.mlab.com:53765/portafolio', function(err,res){
	if (err) {console.log(err);
	};
});

//////// CONFIGURACION DE CLOUDINARY //////////

cloudinary.config({
	cloud_name: "accecar",
	api_key: "581627995675862",
	api_secret: "y2jQCRNi1-UVx2n552vEi8Yywoc"
});

/////// SERVIDOR //////////////////////////////

app.listen(port, function(){
	console.log("corriendo en el puerto: "+ port);
})