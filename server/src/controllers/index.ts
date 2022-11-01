import axios from "axios";
import {ENDPOINTS, HN_API_URL} from "../utils/constants";
import {NextFunction, Request, Response} from "express";
import DOMPurify from "dompurify";

const getItem = async (id: number) => {
  const { data } = await axios.get(HN_API_URL + ENDPOINTS.ITEM + id + ENDPOINTS.JSON);
  let { text } = data;
  if (text) {
    const clean = DOMPurify.sanitize(text);
    return { ...data, text: clean };
  }
  return data;
}

export const getPostsListController = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(HN_API_URL + ENDPOINTS.POSTS + ENDPOINTS.JSON);
    response.send(data.slice(0, 100));
  } catch (err) {
    next(err);
  }
}

export const getItemController = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.body;
  try {
    response.send(await getItem(id));
  } catch (err) {
    next(err);
  }
}