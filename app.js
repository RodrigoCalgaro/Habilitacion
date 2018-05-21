var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

 
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Models
var models = require("./app/models");


//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
var actividadesRoute = require('./app/routes/actividades.js');


//Lo que saqué del ejemplo
app.use('/altaActividad', actividadesRoute);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.User);
 
//Sync Database
models.sequelize.sync({force:false}).then(function() {   //cambiar a force:true cuando se hagan cambios en una tabla que ya existe
 
    console.log('La base de datos se actualizó correctamente')
 
}).catch(function(err) {
 
    console.log(err, "ERROR! No se pudo actualizar la base de datos")
 
});

//Todavía no se que hace (Creo que es el main, o algo así)
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 

//Escucha el puerto 9999 para conectarse
app.listen(9999, function(err) {
 
    if (!err)
        console.log("Todo marcha bien Milhouse!");
    else console.log(err)
 
});