import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Dashboard from './views/dashboard';

const App = () => {
    return ( 
        <Router>
            <Route exact path="/">
                <Dashboard/>
            </Route>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));