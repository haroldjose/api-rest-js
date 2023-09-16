import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Categoria } from "./Categoria.js";
import { Producto } from  './Producto.js'

export const Usuario =sequelize.define(
    'usuarios',
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,                
        },
        correo:{
            type:DataTypes.STRING,                
        },
        contrasena:{
            type:DataTypes.STRING,                
        },
        estado:{
            type:DataTypes.BOOLEAN,
            defaultValue: false                
        }
        
    },
    {
        timestamps: false,
    }
);

Usuario.hasMany(Categoria,{
    foreignKey:'usuarioId',
    sourceKey:'id',
});

Categoria.belongsTo(Usuario,{
    foreignKey:'usuarioId',
    targetKey:'id',
});


Usuario.hasMany(Producto,{
    foreignKey:'usuarioId',
    sourceKey:'id',
});

Producto.belongsTo(Usuario,{
    foreignKey:'usuarioId',
    targetKey:'id',
});

    