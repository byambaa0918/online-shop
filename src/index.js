
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./pages/App/App";
import * as serviceWorker from './serviceWorker';
ReactDOM.render( 
    <App />,
  document.getElementById('root')
>>>>>>> 17662b0e746d97505f520ce3b8a4667d5b295ad8
);
serviceWorker.unregister();
