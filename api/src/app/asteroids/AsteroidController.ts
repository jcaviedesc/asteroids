import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";

const listAsteroids = (req: Request, res: Response, next: NextFunction) => {
  const queryParams = req.query;
  res.status(HttpStatus.OK).json(queryParams);
};

const AsteroidController = { listAsteroids };
export default AsteroidController;
