export interface IPost {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score: number;
  text?: string;
  time: number;
  title: string;
  type: string;
  url?: string;
}

export interface IGetPostsQuery {
  limit?: string;
  page?: string;
}

