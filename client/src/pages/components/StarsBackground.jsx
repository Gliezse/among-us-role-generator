import React, { Component } from 'react';

class StarsBackground extends Component {
    render() { 
        return (
            <div className="stars-background-container">
                <div className="stars-cont">
                    <div className="stars" />
                    <div className="twinkling"/ >
                </div>
                <div className="stars-bg" />
            </div>
        );
    }
}
 
export default StarsBackground;