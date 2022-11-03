import React, {
  DetailedHTMLProps, FC, HTMLAttributes, useEffect, useRef,
} from 'react';
import styles from './news-card-list.module.css';
import { NewsCard } from '../news-card/news-card';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { incrementPage } from '../../store/slices/news-stories-slice';
import { Title } from '../title/title';

interface INewsCardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  posts: number[];
}

export const NewsCardList: FC<INewsCardListProps> = ({ posts }) => {
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.stories);

  useEffect(() => {
    const infinityObserver = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        if (page <= 10) {
          dispatch(incrementPage());
        }
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (ref.current && ref.current.lastChild) {
      infinityObserver.observe(ref.current.lastChild);
    }

    return () => {
      if (ref.current && ref.current.lastChild) {
        infinityObserver.unobserve(ref.current.lastChild);
      }
    };
  }, [ref, page, posts]);

  if (!posts) {
    return <Title>Nothing...</Title>;
  }

  const list = posts.slice(0, page * 10);

  return (
    <ul className={styles.list} ref={ref}>
      {
        list.map((id) => (
          <NewsCard key={id} newsId={id} />
        ))
      }
    </ul>
  );
};
