import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import {
  Button, Main, Paragraph,
} from '../../components';
import styles from './not-found-page.module.css';
import { ReactComponent as GoBackIcon } from '../../images/chevron-left.svg';

export const NotFoundPage: FC = () => {
  const history = useHistory();

  return (
    <Main>
      <div className={cn(styles.container)}>
        <Button appearance="ghost" onClick={() => history.goBack()}>
          <GoBackIcon />
          <Paragraph color="inactive" size="l" weight="bold" className={styles.label}>Back to the news</Paragraph>
        </Button>
      </div>
      <div className={styles.message}>
        <Paragraph size="l" color="inactive" weight="black">404 Not Found</Paragraph>
      </div>
    </Main>
  );
};
