import React, { Component } from 'react'
import FullPageContainer from 'pages/components/FullPageContainer';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() { 
        return (
            <FullPageContainer className="flex justify-center align-items-center">
                <div>
                    <span>
                        coscu army
                    </span>
                    <Link to="/game">Go somewhere else</Link>
                </div>
            </FullPageContainer>
        );
    }
}

export default Home;