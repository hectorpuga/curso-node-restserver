
const {response,request}=require('express');

const usuariosGet=(req=request, res=response)=>{
    const {q,nombre,apikey,page=1,limit}=query=req.query;
    res.json({
        
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })};

    const usuariosPost=(req, res=response)=>{

        const {nombre='No name',edad}=body=req.body;
        res.json({
           
            msg:'post API - controlador',
            nombre,
            edad
        })
      };



    const usuariosPut= (req, res=response)=>{
        const id =req.params.id;
        res.json({
            
            msg:'put API - controlador',
            id
        })
      }


    const usuariosPatch= (req, res=response)=>{
        res.json({
            
            msg:'Patch API - controlador'
        })
      }
    const usuarioDelete=(req, res=response)=>{
        res.json({
            
            msg:'delete API - controlador'
        })
      };


    module.exports={usuariosGet,usuariosPost,usuariosPut,usuariosPatch,usuarioDelete}