import express from 'express';
import {getPostWithCommentsController, getItemController, getPostsListController} from "../controllers";
import {NotFoundException} from "../exceptions";

enum ROUTE {
  POSTS = '/posts',
  POST = '/post',
  ITEM = '/item',
}

export const router = express.Router();

router.get(ROUTE.POSTS, getPostsListController);
router.get(ROUTE.ITEM, getItemController);
router.get(ROUTE.POST, getPostWithCommentsController);
router.use('*', () => {
  throw new NotFoundException();
});