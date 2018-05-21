'use strict';
module.exports = (sequelize, DataTypes) =>  {
 
    var User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        username: {
            type: DataTypes.TEXT
        },
 
        about: {
            type: DataTypes.TEXT
        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        last_login: {
            type: DataTypes.DATE
        },
 
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

        },
        {
          //Para que no se agreguen los timestamp attributes (updatedAt, createdAt)
          timestamps: false,
          //Acá van otras configuraciones (?
        });
        
        User.associate = function(models) {
          //Acá se definen las asociaciones
        };
        return User;
      };