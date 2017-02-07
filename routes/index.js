const express = require('express')
const controllers = require('.././controllers')
var multer = require('multer');
var uploader = multer({dest: "./uploads"});

var middleware_upload = uploader.single('urlimg');

let router = express.Router()

router.get('/admin/', controllers.render.index)
router.get('/login', controllers.render.login)
router.post('/login', controllers.render.iniciarSesion)
router.get('/admin/menu', controllers.render.menu)
router.get('/admin/addsite', controllers.render.addsite)
router.get('/admin/addskill', controllers.render.addskill)
router.post('/admin/new/addsite',middleware_upload,controllers.sites.addsites)
router.post('/admin/new/addskill', controllers.skill.addskills)
router.get('/createsuperusuario',controllers.user.createUserInit)




module.exports = router;