
const {response,request}=require('express');
const Usuario=require('../models/usuario');
const bcryptjs= require('bcryptjs');

const usuariosGet=async(req=request, res=response)=>{
    //const {q,nombre,apikey,page=1,limit}=query=req.query;

    const {limite=5,desde=0}=req.query;
      const [total,usuarios]=await Promise.all([
        Usuario.countDocuments({estado:true}),
        Usuario.find({estado:true})
        .skip(Number(desde)).limit(Number(limite))
      ]);
    res.json({
      total,usuarios
    })
  
  };

    const usuariosPost=async(req, res=response)=>{

      

        const {nombre,correo,password,rol}=req.body;
        const usuario=new Usuario({nombre,correo,password,rol});
      
        
        //Encriptar la contraseña

        const salt =bcryptjs.genSaltSync();
        usuario.password=bcryptjs.hashSync(password,salt);

        //Guardar la contraseña

        await usuario.save();

        res.json({
           
           
            usuario
        })
      };



    const usuariosPut= async(req, res=response)=>{
        const id =req.params.id;
        const {password,google,correo,_id,...resto}=req.body;

        //TODO validar contra base de datos

        if(password){
          const salt =bcryptjs.genSaltSync();
          resto.password=bcryptjs.hashSync(password,salt);

        }

        const usuario=await Usuario.findByIdAndUpdate(id,resto); 

        res.json(usuario)
      }


    const usuariosPatch= (req, res=response)=>{
        res.json({
            
            msg:'Patch API - controlador'
        })
      }
    const usuarioDelete=async(req, res=response)=>{

      const {id}=req.params;

      // Fisicamente lo borramos

     // const usuario= await Usuario.findByIdAndDelete(id);

     const usuario= await Usuario.findByIdAndUpdate(id,{estado:false});

        res.json({
            
           usuario
        })
      };


    module.exports={usuariosGet,usuariosPost,usuariosPut,usuariosPatch,usuarioDelete}