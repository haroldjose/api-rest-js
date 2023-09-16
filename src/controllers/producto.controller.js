import {Usuario} from '../models/Usuario.js';
import {Categoria} from '../models/Categoria.js';
import {Producto} from '../models/Producto.js';

export async function getProductos(req, res){
    try {
        const productos = await Producto.findAll({
            attributes:['id','name','precio_unitario','estado','usuarioId','categoriaId'],
        });
        res.json(productos);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function createProducto(req,res){
    const{name,precio_unitario,estado,categoriaId,usuarioId}=req.body;
    try {
     const newProducto = await Producto.create(
        {
            name,
            precio_unitario,
            estado,
            categoriaId,
            usuarioId
        },
        {
            fields:['name','precio_unitario','estado','categoriaId','usuarioId'],
        }
     );  
     return res.json(newProducto); 
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


export async function getProducto(req, res){
    const{ id } =req.params;
    try {
        const producto=await Producto.findOne({
            where:{id},
        });
        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//actualizar usuario
export async function updateProducto(req, res){
    const{ id } =req.params;
    const{name,precio_unitario,estado}=req.body;
    try {
        const producto=await Producto.findByPk(id);
        producto.name=name;
        producto.precio_unitario=precio_unitario;
        producto.estado=estado;

        await producto.save();

        return res.json(producto);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function deleteProducto(req, res){
    const{ id } =req.params;
    try {
        await Producto.destroy({
            where:{id},
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}