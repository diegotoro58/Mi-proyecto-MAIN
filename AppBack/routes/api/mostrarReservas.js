import express from "express";
import reservaSchema from "../../models/reservas.model.js"
import checkToken from "../../utils/middlewares.js";


const router = express.Router();




//Traer todas las reservas
// router.get('/reservas', (require, response) => {
//     reservaSchema
//         .find()
//         .then((data) => response.json(data))
//         .catch((error) => response.json({ message: error }))

// });
// Traer la reserva por ID
router.get('/reservas/:id', (require, response) => {
    const { id } = require.params;
    reservaSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

router.use(checkToken);

router.get('/reservas', async (req, res) => {
  try {
    const userId = req.user.user_id

    if (req.user.user_role == "regular") {
      let userReserva = await reservaSchema.find({ creadoPor: userId });
      console.log(req.user);
      console.log(userReserva + "UserR");
      res.json(userReserva);
    } else {
      res.statusCode = 401
      res.json({ "message": "No tienes permisos suficientes" })
    }

  } catch (error) {
    res.json({ error: error.message });
  }
});
export default router;