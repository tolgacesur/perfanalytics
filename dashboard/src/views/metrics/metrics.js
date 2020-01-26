import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './metrics.css';
import Chart from '../../components/chart/chart';
import Resources from '../../components/resources/resources';
import ApiService from '../../services/api';

class Metrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            resources: []
        };
    }

    UNSAFE_componentWillMount() {
        ApiService.getMetrics('test').then((data) => {  
            const resources = [];

            data.forEach(d => {
                d.data.resources.forEach(resource => {
                    const existing = resources.find(r => r.url === resource.url && r.transferSize === resource.transferSize);
                    if (!existing){
                        resource.count = 0;
                        resources.average = resource.duration;
                        resources.push(resource);
                    } else {
                        existing.count += 1;
                        existing.duration += resource.duration;
                        existing.average = existing.duration / existing.count;
                    }
                });
            });

            this.setState({
                data : {
                    ttfb: data.map(d => {
                        return {time: d.createdAt, value: d.data.ttfb}
                    }),
                    fcp: data.map(d => {
                        return {time: d.createdAt, value: d.data.fcp}
                    }),
                    dom: data.map(d => {
                        return {time: d.createdAt, value: d.data.domComplete}
                    }),
                    window: data.map(d => {
                        return {time: d.createdAt, value: d.data.windowLoadEvent}
                    })
                },
                resources : resources
            });
        });
    }
    

    render() {
        return (
            this.state.data ? 
            <div className="charts">
                <Row>
                    <Col sm={24} md={12}>
                        <h2>TTFB</h2>
                        <Chart data={this.state.data.ttfb} title="ttfb" color="#3E517A"/>
                    </Col>
                    <Col sm={24} md={12}>
                        <h2>FCP</h2>
                        <Chart data={this.state.data.fcp} title="fcp" color="#3E517A"/>
                    </Col>
                </Row>
                <Row style={{marginTop: '35px'}}>
                    <Col sm={24} md={12}>
                        <h2>DOM Load</h2>
                        <Chart data={this.state.data.dom} title="dom" color="#3E517A"/>
                    </Col>
                    <Col sm={24} md={12}>
                        <h2>Window Load</h2>
                        <Chart data={this.state.data.window} title="window" color="#3E517A"/>
                    </Col>
                </Row>
                <Row>
                    <div className="resources">
                        <h2>Resources</h2>
                        <Resources data={this.state.resources} />
                    </div>
                </Row>
            </div> : null
        )
    };
}

export default Metrics;