import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js";

export const Categoria =sequelize.define(
    'categorias',
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,                
        },
        
    }
);

Categoria.hasMany(Producto,{
    foreignKey:'categoriaId',
    sourceKey:'id',
});

Producto.belongsTo(Categoria,{
    foreignKey:'categoriaId',
    targetKey:'id',
});