import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './metrics.css';
import Chart from '../../components/chart/chart';
import Resources from '../../components/resources/resources';
import Datepicker from '../../components/datepicker/datepicker';
import ApiService from '../../services/api';

class Metrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // TODO : these token and url should be set dynamically
            token: 'test',
            url: 'https://ospeech.org',
            start: null,
            end: null,
            data: null,
            resources: []
        };

        this.onCalendarChange = this.onCalendarChange.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.fetchMetrics();
    }

    fetchMetrics(){
        const params = {
            token: this.state.token,
            start: this.state.start,
            end: this.state.end
        };

        ApiService.getMetrics(params).then((data) => {  
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

    onCalendarChange(start, end) {
        this.setState({start, end}, this.fetchMetrics);
    }

    render() {
        return (
            <div>
                <div className="info">
                    <div className="token">
                        <h1>Token: {this.state.token}</h1>
                        <h1><a href={this.state.url} target="__blank">{this.state.url}</a></h1>
                    </div>
                    <div className="datepicker">
                        {!this.state.start && !this.state.end ? 
                            <p>Showing the last 30 minutes</p>
                        : null}
                        <Datepicker onCalendarChange={this.onCalendarChange}/>
                    </div>
                </div>
                {this.state.data ?
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
                </div> : null}
            </div>
        )
    };
}

export default Metrics;