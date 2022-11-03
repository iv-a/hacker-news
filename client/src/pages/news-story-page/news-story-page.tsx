import React, { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import cn from 'classnames';
import {
  Button, Comment, Main, NewsPost, Paragraph, Spinner, Title,
} from '../../components';
import hnApi from '../../services/api';
import { IQuery } from '../../models';
import { DEC_RADIX } from '../../utils/constants';
import styles from './news-story-page.module.css';
import { ReactComponent as RefreshIcon } from '../../images/arrow-clockwise.svg';
import { ReactComponent as GoBackIcon } from '../../images/chevron-left.svg';

export const NewsStoryPage: FC = () => {
  const history = useHistory();
  const { id } = useParams<IQuery>();

  const { data, isLoading, refetch } = hnApi.useGetPostQuery(parseInt(id, DEC_RADIX));

  const [reFetch, setReFetch] = useState<boolean>(false);

  const handleRefetch = () => {
    refetch();
    setReFetch(true);
    setTimeout(() => setReFetch(false), 50);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return <Title>Nothing...</Title>;
  }

  const { kids = [], descendants = 0 } = data;

  return (
    <Main>
      <div className={cn(styles.container)}>
        <Button appearance="ghost" onClick={() => history.goBack()}>
          <GoBackIcon />
          <Paragraph color="inactive" size="l" weight="bold" className={styles.label}>Back to the news</Paragraph>
        </Button>

        <Button
          appearance="primary"
          onClick={handleRefetch}
        >
          <RefreshIcon className={cn(styles.icon)} />
        </Button>
      </div>
      <NewsPost {...data} />
      {
        reFetch
          ? <Spinner />
          : (
            <section className={styles.comments}>
              <Paragraph
                size="l"
                weight="bold"
                color="inactive"
                className={cn(styles.label)}
              >
                {descendants}
                {' '}
                Comments
              </Paragraph>
              {kids.map((item: any) => <Comment {...item} key={item.id} root />)}
            </section>
          )
      }
    </Main>
  );
};
