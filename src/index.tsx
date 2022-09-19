import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './p1-main/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./p2-homeworks/h10/bll/store";


// igg2

const root = createRoot(document.getElementById('app') as Element)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

)

serviceWorker.unregister()
