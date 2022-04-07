import React from 'react';
import ReactDOM from 'react-dom';
import App from "./f2.pages/app/App";
import {Provider} from "react-redux";
import {store} from "./f1.main/m2.bll/store"

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
