import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./components";
import {Provider} from "react-redux";
import {configureAppStore} from "./store/store";

const store = configureAppStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


