const {DataTypes} =require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define(
        "users",
        {username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,            
        },
        lastname:{
            type:DataTypes.STRING,
        },
        profilePic:{
            type:DataTypes.TEXT,
            defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        },
        profilePic:{
            type:DataTypes.TEXT,
            defaultValue: 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png'
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        },{
            timestamps:true
        }
    );
}