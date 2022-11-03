import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './news-card.module.css';
import { Timestamp } from '../timestamp/timestamp';
import { Avatar } from '../avatar/avatar';
import { Username } from '../username/username';
import { Score } from '../score/score';
import { Title } from '../title/title';
import { SkeletonPlaceholder } from '../skeleton-placeholder/skeleton-placeholder';
import hnApi from '../../services/api';

interface INewsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  newsId: number;
}

export const NewsCard: FC<INewsCardProps> = ({ newsId, className }) => {
  const { data, isLoading } = hnApi.useGetItemQuery(newsId);

  if (isLoading) {
    return (
      <li
        className={cn(styles.card, styles.skeleton, className)}
      >
        <div className={cn(styles.skeleton_header)}>
          <SkeletonPlaceholder />
          <SkeletonPlaceholder />
        </div>
        <div className={cn(styles.skeleton_body)}>
          <SkeletonPlaceholder className={cn(styles.skeleton_score)} />
          <SkeletonPlaceholder className={cn(styles.skeleton_title)} />
          <SkeletonPlaceholder />
        </div>
      </li>
    );
  }

  if (!data) {
    return <></>;
  }

  const {
    by, time, score, title, id,
  } = data;

  return (
    <li
      className={cn(styles.card, className)}
    >
      <Link to={{ pathname: `/news/${id}` }} className={cn(styles.link)}>
        <div className={cn(styles.card_header)}>
          <Timestamp time={time} />
          <Avatar name={by} />
          <Username>{by}</Username>
        </div>
        <div className={cn(styles.card_body)}>
          <Score score={score} />
          <Title className={styles.title}>{title}</Title>
        </div>
      </Link>

    </li>
  );
};
