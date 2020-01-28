import React, { Component } from 'react';
import { Table } from 'antd';

import './resources.css';

const columns = [
    {
      title: 'Url',
      dataIndex: 'url',
      sorter: (a, b) => a.url.length - b.url.length,
      sortDirections: ['descend'],
      render : url => <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.type.length - b.type.length,
      render: value => <strong>{value}</strong>
    },
    {
      title: 'Avg Duration',
      dataIndex: 'duration',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.duration - b.duration,
      render: value => <strong>{value ? value.toFixed(2) : '-'}</strong>
    },
    {
      title: 'Transfer Size',
      dataIndex: 'transferSize',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.transferSize - b.transferSize,
      // octects to kB
      render: value => <strong>{value * 0.0009766} KB</strong>
    }
  ];

class Resource extends Component {
    render() { 
        return (
            <div>
                <Table rowKey="_id" columns={columns} dataSource={this.props.data}/>
            </div>
        );
    }
}

export default Resource;