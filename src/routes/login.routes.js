import { Router } from "express";

import { getLogins } from '../controllers/login.controller.js';

const router=Router()

router.post('/:id',getLogins);


export default router;

