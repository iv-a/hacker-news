import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import styles from './skeleton-placeholder.module.css'
import cn from "classnames";

interface ISkeletonPlaceholderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
}

export const SkeletonPlaceholder: FC<ISkeletonPlaceholderProps> = ({ className, ...props}) => {
  return (
    <div
      className={cn(className, styles.placeholder, )}
      { ...props }
    >

    </div>
  );
};