import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
  </React.StrictMode>,
)
