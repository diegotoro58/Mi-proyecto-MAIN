import express from "express";
import userSchema from "../../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

//Voy a crear mi usuario
router.post('/users', (require, response) => {
    const user = userSchema(require.body);
    user
        .save()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

//Voy a crear mi arreglo de usuarios
router.post('/usersMany', (require, response) => {
    const usersData = require.body;
    userSchema.insertMany(usersData)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

//Traer todos los usuarios
router.get('/users', (require, response) => {
    userSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});
router.get('/users/:id', (require, response) => {
    const { id } = require.params;
    userSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

//Actualizar usuario
router.put('/users/:id', (require, response) => {
    const { id } = require.params;
    const { name, lastname, age } = require.body;
    userSchema.updateOne({ _id: id }, { $set: { name, lastname, age } })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

//Eliminar usuario
router.delete('/users/:id', (require, response) => {
    const { id } = require.params;
    userSchema.deleteOne({ _id: id })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

// POST registro
router.post('/register', async (require, response) => {
    try {
        require.body.password = bcrypt.hashSync(require.body.password, 12);
        const userCreate = await userSchema.create(require.body);
        response.json(userCreate);
    } catch (error) {
        response.json({ error: error.message })
    }
});
// login
router.post('/login', async (require, response)=>{
    //Comprobar existencia del email
    const user = await userSchema.findOne({ email: require.body.email });
    if(!user){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(require.body.password, user.password)
    if(!validar){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    response.json({ success: 'Has ingresado con éxito', 
    token: createToken(user) });
});

//TOKEN
function createToken(user) {
    const payload = {
        user_id: user._id,
        user_role: user.role

    }
    console.log(payload)
    return jwt.sign(payload, 'Hola mundo mi primer token')

}
// router.post('/login', async (require, response) => {
//     try {
//       // Comprobar existencia del email
//       const user = await userSchema.findOne({ email: require.body.email });
//       if (!user || !user.password) {
//         return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' });
//       }
  
//       const validar = bcrypt.compareSync(require.body.password, user.password);
//       if (!validar) {
//         return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' });
//       }
  
//       response.json({ success: 'Has ingresado con éxito' });
//     } catch (error) {
//       console.error('Error en la función de inicio de sesión:', error);
//       response.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
//     }
//   });
// // LOGIN
// router.post('/login', async (require, response)=>{
//     //Comprobar existencia del email
//     const user = await userSchema.findOne({ email: require.body.email });
//     if(!user){
//         return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
//     }

//     const validar = bcrypt.compareSync(require.body.password, user.password)
//     if(!validar){
//         return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
//     }

//     response.json({ success: 'Has ingresado con éxito' });
// });
// router.post('/registerMany', (require, response) => {
//     const userCreate = require.body;
//     userSchema.insertMany(userCreate)
//     .then((data) => response.json(data))
//     .catch((error)=> response.json({ message: error }))
// });

// router.post('/register', (require, response) => {
//     const user = userSchema(require.body);
//     user
//     .save()
//     .then((data) => response.json(data))
//     .catch((error)=> response.json({ message: error }))
// });






export default router;