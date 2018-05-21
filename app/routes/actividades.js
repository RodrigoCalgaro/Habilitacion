var express = require('express');
var router = express.Router();

const Actividad = require('../models').Actividad;

router.get('/', function(req, res, next) {
    res.render('altaActividad');
});
  
router.post('/', function(req, res, next) {
    var data =
    { 
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
    };

    try{
        Actividad.create(data).then(function() {
          res.send("Actividad agregada correctamente!");
        }).catch(function(errors) {
          res.send("Se produjo el siguiente error: <br/>",errors);
        });
    }catch(e){
        console.log(e.toString());
    }
    
});
  
module.exports = router;