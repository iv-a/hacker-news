import {Exception} from "./exception";
import {EXCEPTION} from "../utils/constants";

export class InternalServerErrorException extends Exception {
  constructor(message?: string) {
    super(500, EXCEPTION.INTERNAL_SERVER_ERROR + ' ' + message);
  }
}