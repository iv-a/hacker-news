import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Layout,
  Header, Footer, ScrollUp,
} from '..';
import { MainPage, NewsStoryPage, NotFoundPage } from '../../pages';

export const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/news/:id">
          <NewsStoryPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
      <ScrollUp />
    </Layout>
  </BrowserRouter>
);
