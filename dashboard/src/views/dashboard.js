import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './dashboard.css';
import Header from '../components/header/header';
import Metrics from './metrics/metrics';

const Dashboard = () => {
    return ( 
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route exac path="/">
                        <Metrics/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Dashboard;