const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('reacciones', {
    name: {
          type:DataTypes.STRING,          
       }, 

  },{timestamps: false});
};