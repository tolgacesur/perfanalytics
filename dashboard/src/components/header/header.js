import React, { Component } from 'react';

import './header.css';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="brand">
                    <h2>PERFANALYTICS</h2>
                </div>
            </div>
        );
    }
}

export default Header;