import React from 'react';
import { Row, Col } from 'antd';

import './metrics.css';
import Chart from '../../components/chart/chart';

const Metrics = () => {
    return (
        <div>
            <Row>
                <Col sm={12} md={6}>
                    <Chart data={[]} title="test" color="#3E517A"/>
                </Col>
                <Col sm={12} md={6}>
                    <Chart data={[]} title="test" color="#3E517A"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <Chart data={[]} title="test" color="#3E517A"/>
                </Col>
                <Col sm={12} md={6}>
                    <Chart data={[]} title="test" color="#3E517A"/>
                </Col>
            </Row>
        </div>
    );
}

export default Metrics;