import express, { Router } from "express";
import FavouritesController from "../app/favourites/FavouritesController";

const router: Router = express.Router();

// Ruta para obtener el listado de favourites by user id
router.get("/favourties/users/:id", FavouritesController.getFavouritesByUserId);

export default router;
