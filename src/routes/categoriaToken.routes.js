import { Router } from "express";

import { getCategoriatoken } from '../controllers/tokencategoria.controller.js';

const router=Router()

router.post('/:id',getCategoriatoken);


export default router;

