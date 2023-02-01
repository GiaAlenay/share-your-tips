const {DataTypes,UUID} =require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define(
        "users",        
        {id:{
              type:DataTypes.STRING,
              allowNull: false,
              primaryKey: true,
              unique:true
            },
        username:{
            type:DataTypes.STRING,
            allowNull:true,
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
            allowNull:true,
        },
        profilePic:{
            type:DataTypes.TEXT,
            defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        },
        profilePic2:{
            type:DataTypes.TEXT,
            defaultValue: 'https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png'
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        firsLogin:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }

        },{
            timestamps:true
        }
    );
}