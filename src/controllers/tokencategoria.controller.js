import { token } from 'morgan';
import {Categoria} from '../models/Categoria.js';
import Jwt from 'jsonwebtoken';

//token de categoria
export async function getCategoriatoken(req, res){
    const{ id } =req.params;
    const{name}=req.body;
    try {
        const categoria=await Categoria.findAll({
            where:{
                id: id,
            },
        });

       Jwt.sign({categoria}, 'secretkeycategoria', (err, token) =>{
        res.json({token});
       }); 
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function verifyTokenCategoria(req,res,next){
    const bearerHeader= req.headers['authorization'];
    console.log('bearerHeader', bearerHeader);

    if(typeof bearerHeader !== 'undefined'){
        const token=bearerHeader.split(' ')[1];
        console.log('tokennn', token);
        Jwt.verify(token, 'secretkeycategoria',(error, categoria) =>{
            if(error) res.sendStatus(403);
            else{
                next();
            }
        });
    }else res.sendStatus(403);
}
