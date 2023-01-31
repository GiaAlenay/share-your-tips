
const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "post",
    {  
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      media: {
        type: DataTypes.STRING,
      },
      contComents: {
        type: DataTypes.INTEGER,
        defaultValue:0
      },
      contReacc: {
        type: DataTypes.INTEGER,
        defaultValue:0
      },
    },
    { timestamps: true }
  );
};