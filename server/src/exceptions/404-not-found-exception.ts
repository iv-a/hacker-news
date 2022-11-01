import {Exception} from "./exception";
import {EXCEPTION} from "../utils/constants";

export class NotFoundException extends Exception {
  constructor() {
    super(404, EXCEPTION.NOT_FOUND);
  }
}