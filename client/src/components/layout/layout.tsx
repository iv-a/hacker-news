import React, {
  DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import styles from './layout.module.css';

interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);
