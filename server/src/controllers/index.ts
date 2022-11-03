import axios from "axios";
import {ENDPOINTS, HN_API_URL} from "../utils/constants";
import {NextFunction, Request, Response} from "express";
import DOMPurify from "isomorphic-dompurify";
import {InternalServerErrorException} from "../exceptions";
import {IGetItem} from "../models";

const getItem = async (id: string) => {
  const { data } = await axios.get(HN_API_URL + ENDPOINTS.ITEM + id + ENDPOINTS.JSON);
  let { text } = data;
  if (text) {
    const clean = DOMPurify.sanitize(text);
    return { ...data, text: clean };
  }
  return data;
}

const getTree = async (rootId: string) => {
  try {
    const item = await getItem(rootId);
    const { kids = [], count = 0, id } = item;

    const children = await Promise.all(kids.map(async (id: number) => {
      return await getTree(id.toString());
    }));

    const childrenCount = children.reduce((acc, cur) => acc + cur.count, 0);

    return { id, kids: children, count: count + children.length + childrenCount }
  } catch (err) {
    if (err instanceof Error) {
      throw new InternalServerErrorException(err.message);
    }
    throw new InternalServerErrorException();
  }
};

export const getPostsListController = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get(HN_API_URL + ENDPOINTS.POSTS + ENDPOINTS.JSON);
    response.send(data.slice(0, 100));
  } catch (err) {
    next(err);
  }
}

export const getItemController = async (request: Request<unknown, unknown, unknown, IGetItem>, response: Response, next: NextFunction) => {
  const { id } = request.query;
  try {
    response.send(await getItem(id));
  } catch (err) {
    next(err);
  }
}

export const getPostWithCommentsController = async (request: Request<unknown, unknown, unknown, IGetItem>, response: Response, next: NextFunction) => {
  const { id } = request.query;

  try {
    const post = await getItem(id);
    const { kids } = await getTree(id);
    response.send({
      ...post,
      kids: kids
    });
  } catch (err) {
    next(err);
  }
}