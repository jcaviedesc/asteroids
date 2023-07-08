import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";
import { getQueryParams } from "../../shared/utils/RequestUtils";
import { parseToError } from "../../shared/utils/ErrorUtils";

const listAsteroids = (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryParams = getQueryParams(req, ["start"]);
    res.status(HttpStatus.OK).json(queryParams);
  } catch (e) {
    const error = parseToError(e);
    if (error.name === "QueryParamsError") {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
      return;
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

const AsteroidController = { listAsteroids };
export default AsteroidController;
