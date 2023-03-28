import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import 'react-lazy-load-image-component/src/effects/blur.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

