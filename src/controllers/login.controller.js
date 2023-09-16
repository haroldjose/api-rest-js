import { token } from 'morgan';
import {Usuario} from '../models/Usuario.js';
import {Categoria} from '../models/Categoria.js';
import {Producto} from '../models/Producto.js';
import Jwt from 'jsonwebtoken';

export async function getLogins(req, res){
    const{ id } =req.params;
    const{name,contrasena}=req.body;
    try {
        const usuario=await Usuario.findAll({
            where:{
                id: id,
                name:name,
                contrasena:contrasena,
            },
        });

       Jwt.sign({usuario}, 'secretkey', (err, token) =>{
        res.json({token});
       }); 
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function verifyToken(req,res,next){
    const bearerHeader= req.headers['authorization'];
    console.log('bearerHeader', bearerHeader);

    if(typeof bearerHeader !== 'undefined'){
        const token=bearerHeader.split(' ')[1];
        console.log('tokennn', token);
        Jwt.verify(token, 'secretkey',(error, usuario) =>{
            if(error) res.sendStatus(403);
            else{
                next();
            }
        });
    }else res.sendStatus(403);
}


