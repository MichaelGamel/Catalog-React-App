import React from 'react';
import Catalog from './pages/catalog';
import { Provider } from 'react-redux';
import { Layout } from './shared/components/Layout';
import { store } from './store';

export default () => (
  <Provider store={store}>
    <Layout>
      <Catalog />
    </Layout>
  </Provider>
);
