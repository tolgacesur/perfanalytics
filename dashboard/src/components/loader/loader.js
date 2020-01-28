import React from 'react';
import Lottie from 'react-lottie';

import animationData from './loader.json'
import './loader.css';

const options = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="lottie">
                <Lottie options={options}
                height={400}
                width={400}/>
            </div>
        </div>
    );
}

export default Loader;