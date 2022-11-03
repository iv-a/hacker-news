import React, {
  DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './main.module.css';

interface IMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
}

export const Main: FC<IMainProps> = ({ children }) => (
  <main className={cn(styles.main)}>
    {children}
  </main>
);
