import express, { Router } from "express";
import AsteroidController from "../app/asteroids/AsteroidController";

const router: Router = express.Router();

// Ruta para obtener el listado de asteroids
router.get("/asteroids", AsteroidController.listAsteroids);

export default router;
