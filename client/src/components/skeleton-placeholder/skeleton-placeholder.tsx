import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './skeleton-placeholder.module.css';

interface ISkeletonPlaceholderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const SkeletonPlaceholder: FC<ISkeletonPlaceholderProps> = ({ className, ...props }) => (
  <div
    className={cn(className, styles.placeholder)}
    {...props}
  />
);
