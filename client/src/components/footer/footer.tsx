import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import moment from 'moment';
import styles from './footer.module.css';
import { Paragraph } from '../paragraph/paragraph';

type IFooterProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Footer: FC<IFooterProps> = () => {
  const year = moment().format('YYYY');

  return (
    <footer className={cn(styles.footer)}>
      <Paragraph color="inactive">
        &copy;
        {`${year}. Artem Ivanov`}
      </Paragraph>
    </footer>
  );
};
