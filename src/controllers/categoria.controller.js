import {Usuario} from '../models/Usuario.js';
import {Categoria} from '../models/Categoria.js';
import {Producto} from '../models/Producto.js';

export async function getCategorias(req, res){
    try {
        const categoria = await Categoria.findAll({
            attributes:['id','name','usuarioId'],
            // order:[['id','DESC']]
        });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export async function createCategoria(req,res){
    const{name,usuarioId}=req.body;
    try {
     const newCategoria = await Categoria.create(
        {
            name,
            usuarioId
        },
        {
            fields:['name','usuarioId'],
        }
     );  
     return res.json(newCategoria); 
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


export async function getCategoria(req, res){
    const{ id } =req.params;
    try {
        const categoria=await Categoria.findOne({
            where:{id},
        });
        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


export async function updateCategoria(req, res){
    const{ id } =req.params;
    const{name}=req.body;
    try {
        const categoria=await Categoria.findByPk(id);
        categoria.name=name;

        await categoria.save();

        return res.json(categoria);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


export async function deleteCategoria(req, res){
    const{ id } =req.params;
    try {
        await Producto.destroy({
            where:{usuarioId:id},
        });
        await Categoria.destroy({
            where:{id},
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//
export async function getCategoriasProductos(req, res) {
    try {
        const categorias = await Categoria.findAll({
          attributes: ['id', 'name'],
          include: [
            {
              model: Producto,
              attributes: ['id', 'name'],
              required: true,
            },
          ],
        });
        res.json(categorias);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }

// mostrar las productos de una categoria
export async function getCategoriaProductos(req, res) {
    const { id } = req.params;
    try {
      const productos = await Producto.findAll({
        attributes: ['id', 'usuarioId', 'categoriaId','name','precio_unitario','estado'],
        where: { categoriaId: id },
      });
      return res.json(productos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }    