import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";
import { parseToError } from "../../shared/utils/ErrorUtils";
import FavouriteService from "./FavouritesService";

const getFavouritesByUserId = (req: Request, res: Response) => {
  try {
    const userId = req.params?.id as unknown as number;
    if (!userId) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ error: "missing user id parameter" });
      return;
    }
    const data = FavouriteService.listByUserId(userId);
    res.status(HttpStatus.OK).json(data);
  } catch (e) {
    const error = parseToError(e);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const FavouritesController = { getFavouritesByUserId };
export default FavouritesController;
