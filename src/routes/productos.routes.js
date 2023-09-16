import { Router } from "express";

import { getProductos, createProducto, getProducto, updateProducto, deleteProducto } from '../controllers/producto.controller.js';

import { verifyTokenProducto } from '../controllers/tokenproducto.controller.js';

const router=Router()

router.get('/', verifyTokenProducto, getProductos);

router.post('/', verifyTokenProducto, createProducto);

router.get('/:id', getProducto);

router.put('/:id', verifyTokenProducto, updateProducto);

router.delete('/:id', verifyTokenProducto, deleteProducto);



export default router;