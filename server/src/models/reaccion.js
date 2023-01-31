const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('reacction', {
    name: {
          type:DataTypes.STRING,          
       }, 

  },{timestamps: false});
};