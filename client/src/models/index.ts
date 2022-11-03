export type TPostsList = number[];

export interface INewsStory {
  title: string;
  score: number;
  by: string;
  time: number;
}

export interface IItem {
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
  count?: number;
}

export interface IQuery {
  id: string;
}
