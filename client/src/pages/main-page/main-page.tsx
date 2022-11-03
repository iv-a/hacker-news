import React, { FC, useState } from 'react';
import cn from 'classnames';
import {
  Main, NewsCardList, Paragraph, Spinner,
} from '../../components';
import styles from './main-page.module.css';
import { ReactComponent as RefreshIcon } from '../../images/arrow-clockwise.svg';
import hnApi from '../../services/api';

export const MainPage: FC = () => {
  const { data: posts = [], isLoading, refetch } = hnApi.useGetPostsListQuery(void null, {
    pollingInterval: 1000 * 60,
  });

  const [reFetch, setReFetch] = useState<boolean>(false);

  const handleRefetch = () => {
    refetch();
    setReFetch(true);
    setTimeout(() => setReFetch(false), 50);
  };

  return (
    <Main>
      <div className={cn(styles.container)}>
        <Paragraph color="inactive" size="l" weight="bold" className={styles.label}>Latest 100 news</Paragraph>
        <button className={cn(styles.button)} onClick={handleRefetch}>
          <RefreshIcon className={cn(styles.icon)} />
        </button>
      </div>
      {(isLoading || reFetch) ? <Spinner /> : <NewsCardList posts={posts} />}
    </Main>
  );
};
