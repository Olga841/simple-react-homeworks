import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './p1-main/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {HashRouter} from "react-router-dom";


// igg2

const root = createRoot(document.getElementById('app') as Element)
root.render(
        <App/>
)

serviceWorker.unregister()
