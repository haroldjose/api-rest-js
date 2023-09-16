import { Router } from "express";

import { getProductotoken } from '../controllers/tokenproducto.controller.js';

const router=Router()

router.post('/:id', getProductotoken);

export default router;

