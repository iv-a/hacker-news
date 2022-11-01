export const HN_API_URL = 'https://hacker-news.firebaseio.com/v0';

export enum EXCEPTION {
  NOT_FOUND = 'Not Found',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}

export enum ENDPOINTS {
  ITEM = '/item/',
  POSTS = '/newstories',
  JSON = '.json',
}

export const DEC_RADIX = 10;