'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alumno = sequelize.define('Alumno', {
    idAlumno: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    f_nacimiento: DataTypes.DATE,
  }, 
  {
    //Para que no se agreguen los timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    //Acá van otras configuraciones (?
  });
 
  Alumno.associate = function(models) {
    //Acá se definen las asociaciones 
  };
  return Alumno;
};