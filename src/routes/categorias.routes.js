import { Router } from "express";

import { getCategorias, createCategoria, getCategoria, updateCategoria, deleteCategoria, getCategoriasProductos, getCategoriaProductos,
        
} from '../controllers/categoria.controller.js';

import { verifyTokenCategoria } from '../controllers/tokencategoria.controller.js'; 

const router=Router()

router.get('/', verifyTokenCategoria, getCategorias);

router.post('/', verifyTokenCategoria, createCategoria);

router.get('/:id', verifyTokenCategoria, getCategoria);

router.put('/:id', verifyTokenCategoria, updateCategoria);

router.delete('/:id', verifyTokenCategoria, deleteCategoria);

//
router.get('/all/productosinto/all', getCategoriasProductos);

router.get('/:id/productos', getCategoriaProductos);
export default router;