import React from "react";
import ReactDom from 'react-dom';
import App from './App'
import './css/app.css';
import 'antd/dist/antd.css';
import store from "./store";
import { Provider } from 'react-redux'


ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root'))