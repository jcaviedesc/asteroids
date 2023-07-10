import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";
import { parseToError } from "../../shared/utils/ErrorUtils";

const getFavouritesByUserId = (req: Request, res: Response) => {
  try {
    res.status(HttpStatus.OK).json([2, 3, 56]);
  } catch (e) {
    const error = parseToError(e);
    if (error.name === "QueryParamsError") {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
      return;
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const FavouritesController = { getFavouritesByUserId };
export default FavouritesController;
