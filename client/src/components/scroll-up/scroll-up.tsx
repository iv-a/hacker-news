import React, {
  ButtonHTMLAttributes, DetailedHTMLProps, FC,
} from 'react';
import cn from 'classnames';
import styles from './scroll-up.module.css';
import { ReactComponent as UpIcon } from '../../images/arrow-up-circle-fill.svg';

type IScrollUpProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ScrollUp: FC<IScrollUpProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={cn(styles.container)} onClick={scrollToTop}>
      <UpIcon className={cn(styles.icon)} />
    </button>
  );
};
