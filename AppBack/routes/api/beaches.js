import express from "express";
import beachSchema from "../../models/beaches.model.js"

const  router = express.Router();



//Voy a crear mi playa
router.post('/beaches', (require, response) => {
    const beach = beachSchema(require.body);
    beach
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Voy a crear mi arreglo de playas
router.post('/beachesMany', (require, response) => {
    const beachesData = require.body;
    beachSchema.insertMany(beachesData)
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Traer todas las playas
router.get('/beaches', (require, response) => {
   beachSchema
   .find()
   .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))

});
router.get('/beaches/:id', (require, response) =>{
    const { id } = require.params;
    beachSchema.findById(id)
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Actualizar playa por ID
// router.put('/beaches/:id', (require, response) =>{
//     const { id } = require.params;
//     const { playa, pais, ciudad, hoteles,  } = require.body;
//     beachSchema.updateOne({ _id: id }, {$set:{playa, pais, ciudad, hoteles,  }})
//     .then((data) => response.json(data))
//    .catch((error)=> response.json({ message: error }))
// });

//Eliminar playa por ID
router.delete('/beaches/:id', (require, response) =>{
    const { id } = require.params;
    beachSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});


export default router;