import express from "express";
import userRoutes from "./users.js";
import beachRoutes from "./beaches.js";
import checkToken from "../../utils/middlewares.js";
import reservaRoutes from "./reservas.js";
import mostrarReservas from "./mostrarReservas.js";


const router = express.Router();

router.use('', userRoutes);
router.use('', beachRoutes);
router.use('', checkToken, reservaRoutes);
router.use('', checkToken, mostrarReservas);






export default router;

