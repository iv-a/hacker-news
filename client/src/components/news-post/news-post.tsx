import React, { FC } from 'react';
import cn from 'classnames';
import styles from './news-post.module.css';
import { Avatar } from '../avatar/avatar';
import { Username } from '../username/username';
import { Title } from '../title/title';
import { Paragraph } from '../paragraph/paragraph';
import { Timestamp } from '../timestamp/timestamp';
import { Score } from '../score/score';
import { IItem } from '../../models';

export const NewsPost: FC<IItem> = ({
  by, score, time, title, url, text,
}) => (
  <div className={cn(styles.post)}>
    <div className={cn(styles.post_header)}>
      <Avatar name={by} />
      <Username>{by}</Username>
      <Timestamp time={time} />
    </div>
    <div className={cn(styles.post_body)}>
      <Title>{title}</Title>
      <a className={cn(styles.link)} href={url} target='_blank'>{url}</a>
      {text && <Paragraph dangerouslySetInnerHTML={{ __html: text }} type="div" />}
    </div>
    <Score score={score} size="s" />
  </div>
);
