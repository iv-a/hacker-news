import React, {
  FC, useState,
} from 'react';
import cn from 'classnames';
import styles from './comment.module.css';

import { Avatar } from '../avatar/avatar';
import { Username } from '../username/username';
import { Timestamp } from '../timestamp/timestamp';
import { Paragraph } from '../paragraph/paragraph';

import { ReactComponent as ShowMoreIcon } from '../../images/plus-square-fill.svg';
import { ReactComponent as CollapseIcon } from '../../images/dash-square.svg';
import hnApi from '../../services/api';
import { SkeletonPlaceholder } from '../skeleton-placeholder/skeleton-placeholder';

export const Comment: FC<any> = ({
  id, kids, count, root = false,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(() => !root);

  const { data, isLoading } = hnApi.useGetItemQuery(id);

  const toggleShowChildren = () => {
    setShowChildren((prevState) => !prevState);
  };

  if (isLoading) {
    return (
      <div className={cn(styles.comment)}>
        <div className={cn(styles.body)}>
          <div className={cn(styles.comment_head, styles.skeleton_header)}>
            <SkeletonPlaceholder />
          </div>
          <div className={cn(styles.skeleton_body)}>
            <SkeletonPlaceholder className={styles.skeleton_row_a} />
            <SkeletonPlaceholder className={styles.skeleton_row_a} />
            <SkeletonPlaceholder className={styles.skeleton_row_b} />
          </div>
        </div>

        <div className={cn(styles.comment_children)}>
          {showChildren && kids.map((item : any) => (<Comment key={item.id} {...item} />))}
          {
            count > 0 && showChildren
            && (
            <div className={cn(styles.collapsing_area)}>
              <CollapseIcon className={cn(styles.icon)} />
              <div className={cn(styles.line)} />
            </div>
            )
          }
        </div>
      </div>
    );
  }

  if (!data) {
    return <></>;
  }

  const { by, time, text } = data;

  return (
    <div className={cn(styles.comment)}>
      <div className={cn(styles.body, {
        [styles.deleted]: !text,
      })}
      >
        <div className={cn(styles.comment_head)}>
          <Avatar name={by} />
          <Username>{by}</Username>
          <Timestamp time={time} />
        </div>
        {
          text
            ? <Paragraph dangerouslySetInnerHTML={{ __html: text }} type="div" />
            : <Paragraph color="inactive">There was a comment...</Paragraph>
        }
      </div>
      <div
        className={cn(styles.toggle_children, {
          [styles.toggled]: showChildren || count === 0,
        })}
        onClick={toggleShowChildren}
      >
        {
          count > 0 && !showChildren
            && (
            <>
              <ShowMoreIcon className={cn(styles.show_icon)} />
              <Paragraph weight="bold" color="accent">
                {`View ${count} replies `}
                &#8594;
              </Paragraph>
            </>
            )
        }
      </div>
      <div className={cn(styles.comment_children)}>
        {showChildren && kids.map((item : any) => (<Comment key={item.id} {...item} />))}
        {
          count > 0 && showChildren
          && (
          <div className={cn(styles.collapsing_area)} onClick={toggleShowChildren}>
            <CollapseIcon className={cn(styles.icon)} />
            <div className={cn(styles.line)} />
          </div>
          )
        }
      </div>
    </div>
  );
};
