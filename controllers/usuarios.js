
const {response,request}=require('express');

const usuariosGet=(req=request, res=response)=>{
    const query=req.query;
    res.json({
        ok:true,
        msg:'get API - controlador',
        query
    })};

    const usuariosPost=(req, res=response)=>{

        const body=req.body;
        res.json({
            ok:true,
            msg:'post API - controlador',
            body
        })
      };



    const usuariosPut= (req, res=response)=>{
        const id =req.params.id;
        res.json({
            ok:true,
            msg:'put API - controlador',
            id
        })
      }


    const usuariosPatch= (req, res=response)=>{
        res.json({
            ok:true,
            msg:'Patch API - controlador'
        })
      }
    const usuarioDelete=(req, res=response)=>{
        res.json({
            ok:true,
            msg:'delete API - controlador'
        })
      };


    module.exports={usuariosGet,usuariosPost,usuariosPut,usuariosPatch,usuarioDelete}