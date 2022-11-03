import React, {
  DetailedHTMLProps, FC, HTMLAttributes, useMemo,
} from 'react';
import cn from 'classnames';
import styles from './avatar.module.css';

interface IAvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}

export const Avatar:FC<IAvatarProps> = ({ name, className, ...props }) => {
  const letter = useMemo(() => (name ? name[0].toUpperCase() : ''), [name]);

  return (
    <div
      className={cn(styles.avatar, className)}
      {...props}
    >
      {letter}
    </div>
  );
};
