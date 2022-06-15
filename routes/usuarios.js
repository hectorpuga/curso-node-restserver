const {Router} =require('express');

const { check } = require('express-validator');
const { usuariosPut, usuariosPatch, usuariosPost, usuarioDelete,usuariosGet} = require('../controllers/usuarios');
const { esRoleValido, emailExiste,existeUsuarioPorId} = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router= Router();

router.get('/', usuariosGet)
router.put('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut)
router.patch('/',usuariosPatch)
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    check('password','El password es obligatorio y mas de 6 letras').isLength({min:6}),
    //check('rol','No es un rol valido').isIn(['ADMIN_ROLE'],'USER_ROLE'),
    check('rol').custom(esRoleValido),
    validarCampos

],usuariosPost )
router.delete('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos

],  usuarioDelete)

module.exports=router;