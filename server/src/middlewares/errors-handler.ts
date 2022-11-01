import {NextFunction, Request, Response} from "express";
import {Exception} from "../exceptions/exception";
import {EXCEPTION} from "../utils/constants";

export const errorsHandler = (err: Exception, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message } = err;
  res.status(status).send({
    message: status === 500 ? EXCEPTION.INTERNAL_SERVER_ERROR: message
  });
  next();
}