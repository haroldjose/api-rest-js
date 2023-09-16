import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto =sequelize.define(
    'productos',
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,                
        },
        precio_unitario:{
            type:DataTypes.INTEGER,                
        },
        estado:{
            type:DataTypes.BOOLEAN,
            defaultValue: false                
        }
        
    }
);