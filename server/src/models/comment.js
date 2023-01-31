const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('coment', {
    content: {
        type:DataTypes.STRING,
        allowNull: true
    },
    multimedia: {
        type:DataTypes.STRING,
        allowNull: true   
    },

  },{timestamps: true});
};
