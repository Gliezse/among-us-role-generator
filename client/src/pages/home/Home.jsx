import React, { Component } from 'react'
import FullPageContainer from 'pages/components/FullPageContainer';
import JoinGameForm from 'pages/home/components/JoinGameForm';

class Home extends Component {
    render() { 
        return (
            <FullPageContainer className="flex justify-center align-items-center">
                <div className="home-page-content">
                    <h1>
                        Among Us
                    </h1>
                    <h3>
                        Role Generator
                    </h3>
                    <div className="home-page-data-container">
                        <JoinGameForm />
                    </div>
                </div>
            </FullPageContainer>
        );
    }
}

export default Home;