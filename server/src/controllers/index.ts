import axios from "axios";
import {ENDPOINTS, HN_API_URL} from "../utils/constants";
import {NextFunction, Request, Response} from "express";
import DOMPurify from "isomorphic-dompurify";
import {InternalServerErrorException} from "../exceptions";
import {IPost} from "../models";

const getItem = async (id: number) => {
  const { data } = await axios.get(HN_API_URL + ENDPOINTS.ITEM + id + ENDPOINTS.JSON);
  let { text } = data;
  if (text) {
    const clean = DOMPurify.sanitize(text);
    return { ...data, text: clean };
  }
  return data;
}

const getTree = async (rootId: number) => {
  try {
    const item = await getItem(rootId);
    const { kids = [], count = 0 } = item;

    const children = await Promise.all(kids.map(async (id: number) => {
      return await getTree(id);
    }));

    const filteredChildren = children.filter(({text}) => text);
    const childrenCount = filteredChildren.reduce((acc, cur) => acc + cur.count, 0);

    return { ...item, kids: filteredChildren, count: count + filteredChildren.length + childrenCount }
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

export const getItemController = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.body;
  try {
    response.send(await getItem(id));
  } catch (err) {
    next(err);
  }
}

export const getPostWithCommentsController = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.body;

  try {
    const post = await getTree(id);
    const { kids } = post;
    response.send({
      ...post,
      kids: kids.map(({ kids, ...rest }: IPost) => ({ ...rest })),
    });
  } catch (err) {
    next(err);
  }
}

export const getCommentsController = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.body;

  try {
    const { kids } = await getTree(id);
    response.send(kids);
  } catch (err) {
    next(err);
  }
}