'use strict';
module.exports = (sequelize, DataTypes) => {
  var Actividad = sequelize.define('Actividad', {
    idActividad: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  
  }, 
  {
    //Para que no se agreguen los timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    //Acá van otras configuraciones (?
  });
  
  Actividad.associate = function(models) {
    //Acá se definen las asociaciones
  };
  return Actividad;
};