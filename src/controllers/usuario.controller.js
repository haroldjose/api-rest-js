import {Usuario} from '../models/Usuario.js';
import {Categoria} from '../models/Categoria.js';
import {Producto} from '../models/Producto.js';

//mostrar
export async function getUsuarios(req, res){
    try {
        const usuarios = await Usuario.findAll({
            attributes:['id','name','correo','contrasena','estado'],
        });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//crear
export async function createUsuario(req,res){
    const{name,correo,contrasena,estado}=req.body;
    try {
     const newUsuario = await Usuario.create(
        {
            name,
            correo,
            contrasena,
            estado
        },
        {
            fields:['name','correo','contrasena','estado'],
        }
     );  
     return res.json(newUsuario); 
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//mostrar por id
export async function getUsuario(req, res){
    const{ id } =req.params;
    try {
        const usuario=await Usuario.findOne({
            where:{id},
        });
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

//actualizar usuario
export async function updateUsuario(req, res){
    const{ id } =req.params;
    const{name,correo,contrasena,estado}=req.body;
    try {
        const usuario=await Usuario.findByPk(id);
        usuario.name=name;
        usuario.correo=correo;
        usuario.contrasena=contrasena;
        usuario.estado=estado;

        await usuario.save();

        return res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

// eliminar usuario
export async function deleteUsuario(req, res){
    const{ id } =req.params;
    try {
        await Categoria.destroy({
            where:{usuarioId:id},
        });
        await Producto.destroy({
            where:{usuarioId:id},
        });
        await Usuario.destroy({
            where:{id},
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


//usuarios categorias
export async function getUsuariosCategorias(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'name', 'correo', 'contrasena','estado'],
        include: [
          {
            model: Categoria,
            required: true,
          },
        ],
      });
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  //usuarios productos
  export async function getUsuariosProductos(req, res) {
    try {
        const usuarios = await Usuario.findAll({
          attributes: ['id', 'name', 'correo', 'contrasena','estado'],
          include: [
            {
              model: Producto,
              attributes: ['id', 'name'],
              required: true,
            },
          ],
        });
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    }

// mostrar las categorias de un usuario
export async function getUsuarioCategorias(req, res) {
    const { id } = req.params;
    try {
      const categorias = await Categoria.findAll({
        attributes: ['id', 'usuarioId', 'name'],
        where: { usuarioId: id },
      });
      return res.json(categorias);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  // mostrar las productos de un usuario
  export async function getUsuarioProductos(req, res) {
    const { id } = req.params;
    try {
      const productos = await Producto.findAll({
        attributes: ['id', 'usuarioId','categoriaId','name','precio_unitario','estado'],
        where: { usuarioId: id },
      });
      return res.json(productos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }