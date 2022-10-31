import React, {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from './news-card.module.css';
import cn from "classnames";
import data from './post.json';
import {Timestamp} from "../timestamp/timestamp";
import {Avatar} from "../avatar/avatar";
import {Username} from "../username/username";
import {Score} from "../score/score";
import {Title} from "../title/title";
import {SkeletonPlaceholder} from "../skeleton-placeholder/skeleton-placeholder";

interface INewsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
}

export const NewsCard: FC<INewsCardProps> = ({ className }) => {
  const { id, by, title, time, score } = data;

  if (!data) {
    return (
      <li
        className={cn(styles.card, styles.skeleton, className)}
      >
        <div className={cn(styles.skeleton_header)}>
          <SkeletonPlaceholder />
          <SkeletonPlaceholder />
        </div>
        <div className={cn(styles.skeleton_body)}>
          <SkeletonPlaceholder className={cn(styles.skeleton_score)}/>
          <SkeletonPlaceholder className={cn(styles.skeleton_title)}/>
          <SkeletonPlaceholder />
        </div>
      </li>
    );
  }

  return (
    <li
      className={cn(styles.card, className)}
    >
      <div className={cn(styles.card_header)}>
        <Timestamp time={time} />
        <Avatar name={by} />
        <Username>{by}</Username>
      </div>
      <div className={cn(styles.card_body)}>
        <Score score={score} />
        <Title>{title}</Title>
      </div>
    </li>
  );
}