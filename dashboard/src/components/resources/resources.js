import React, { Component } from 'react';
import { Table } from 'antd';

import './resources.css';

const columns = [
    {
      title: 'Url',
      dataIndex: 'url',
      sorter: (a, b) => a.url.length - b.url.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Type',
      dataIndex: 'type',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: 'Avg Duration',
      dataIndex: 'average',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.duration - b.duration,
    },
    {
      title: 'Transfer Size',
      dataIndex: 'size',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.size - b.size,
    }
  ];

class Resource extends Component {
    render() { 
        return (
            <div>
                <Table columns={columns} dataSource={this.props.data}/>
            </div>
        );
    }
}

export default Resource;