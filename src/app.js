//levantamos el servidor

import express from "express";
import morgan from "morgan";

const app=express()

//importar rutas
import usuarioRoutes from './routes/usuarios.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import productoRoutes from './routes/productos.routes.js';
import loginRoutes from './routes/login.routes.js';
import categoriaTokenRoutes from './routes/categoriaToken.routes.js';
import produtoTokenRoutes from './routes/productoToken.routes.js';
//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/usuarios',usuarioRoutes);
app.use('/api/categorias',categoriaRoutes);
app.use('/api/productos',productoRoutes);
app.use('/api/login',loginRoutes);
app.use('/api/categoriatoken',categoriaTokenRoutes);
app.use('/api/productotoken',produtoTokenRoutes);

export default app;