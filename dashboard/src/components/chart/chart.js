import React, { Component } from 'react';
import ChartJs from 'chart.js';

import './chart.css'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new ChartJs(this.chartRef.current, {
            type: 'line',
            options: {
                responsive : true,
                legend : {
                    display : false
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                displayFormats: {
                                    minute: 'HH:mm',
                                },
                                unit: 'minute'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map(d => d.time),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 3,
                    lineTension: 0
                }]
            }
        });
    }

    render() {
        return (
            <div className="chart-container">
                <canvas ref={this.chartRef} />
            </div>
        );
    }
}

export default Chart;