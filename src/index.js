import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Switch,Route} from "react-router-dom"
import { NoLayoutRoutes } from "router"
import routeEach from "utils/routeEach"
import store from "./store"
import {Provider} from "react-redux";

ReactDOM.render(
   <Provider store={store}>
    <Router>
       <Switch>
            {routeEach(NoLayoutRoutes)} 
            <Route component={App}/> 
       </Switch>
    </Router>
    </Provider>
    , document.getElementById('root'));




