import { Request } from "express";
import { QueryError } from "../errors/QueryError";

export function getQueryParams(req: Request, requiredParams: string[] = []) {
  const query = req.query;
  if (requiredParams.length > 0) {
    // validate params
    requiredParams.forEach((paramKey) => {
      const hasQueryParam = paramKey in query;
      if (
        !hasQueryParam ||
        query[paramKey] === undefined ||
        query[paramKey] === null
      ) {
        throw new QueryError(`param '${paramKey}' is not set`);
      }
    });
  }
  return query;
}
