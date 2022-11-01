import axios from "axios";
import {ENDPOINTS, HN_API_URL} from "../utils/constants";
import {NextFunction, Request, Response} from "express";


export const getPostsList = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(HN_API_URL + ENDPOINTS.POSTS + ENDPOINTS.JSON);
    response.send(data.slice(0, 100));
  } catch (err) {
    next(err);
  }
}