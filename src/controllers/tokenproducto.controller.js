import { token } from 'morgan';
import {Usuario} from '../models/Usuario.js';
import {Categoria} from '../models/Categoria.js';
import {Producto} from '../models/Producto.js';
import Jwt from 'jsonwebtoken';

//token de producto
export async function getProductotoken(req, res){
    const{ id } =req.params;
    const{name}=req.body;
    try {
        const producto=await Producto.findAll({
            where:{
                id: id,
            },
        });

       Jwt.sign({producto}, 'secretkeyProducto', (err, token) =>{
        res.json({token});
       }); 
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function verifyTokenProducto(req,res,next){
    const bearerHeader= req.headers['authorization'];
    console.log('bearerHeader', bearerHeader);

    if(typeof bearerHeader !== 'undefined'){
        const token=bearerHeader.split(' ')[1];
        console.log('tokennn', token);
        Jwt.verify(token, 'secretkeyProducto',(error, producto) =>{
            if(error) res.sendStatus(403);
            else{
                next();
            }
        });
    }else res.sendStatus(403);
}