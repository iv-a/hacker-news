import React, {
  DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './username.module.css';

interface IUsernameProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
}

export const Username:FC<IUsernameProps> = ({ children, className, ...props }) => (
  <p
    className={cn(styles.username, className)}
    {...props}
  >
    {children}
  </p>
);
