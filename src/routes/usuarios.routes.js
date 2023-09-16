import { Router } from "express";

import { getUsuarios,createUsuario, getUsuario, updateUsuario, deleteUsuario,
    getUsuariosCategorias,
    getUsuariosProductos,
    getUsuarioCategorias,
    getUsuarioProductos
 } from '../controllers/usuario.controller.js'; 

import { verifyToken} from '../controllers/login.controller.js'; 

const router=Router()

router.get('/', getUsuarios);

router.post('/', verifyToken, createUsuario);

router.get('/:id',verifyToken, getUsuario);

router.put('/:id', verifyToken, updateUsuario);

router.delete('/:id',verifyToken, deleteUsuario);


//
router.get('/all/categorias/all', getUsuariosCategorias);
router.get('/all/productos/all', getUsuariosProductos);

router.get('/:id/categorias', getUsuarioCategorias);
router.get('/:id/productos', getUsuarioProductos);


export default router;