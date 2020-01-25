import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './dashboard.css';
import Header from '../components/header/header';
import Metrics from './metrics/metrics';

const { Content, Footer } = Layout;

const Dashboard = () => {
    return ( 
        <div>
            <Layout className="layout">
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Router>
                        <Switch>
                            <Route exac path="/">
                                <div className="container">
                                    <Metrics/>
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </Content>
                <Footer className="footer">Perfanalytics © 2020</Footer>
            </Layout>
        </div>
    );
}

export default Dashboard;