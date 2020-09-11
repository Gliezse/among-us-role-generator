import React, { Component } from 'react'
import FullPageContainer from 'pages/components/FullPageContainer';
import JoinGameForm from 'pages/home/components/JoinGameForm';
import CreateGameForm from 'pages/home/components/CreateGameForm';
import { AnimatePresence } from 'framer-motion';
import HomeTransition from 'pages/home/components/HomeTransition';

class Home extends Component {
    forms = {
        JOINING: "joining",
        CREATING: "creating",
    }

    state = {
        form: this.forms.JOINING,
    }

    handleToggleForm = () => {
        const { form } = this.state;

        if (form === this.forms.CREATING) {
            this.setState({ form: this.forms.JOINING })
        } else {
            this.setState({ form: this.forms.CREATING })
        }
    }

    getForm = () => {
        const { form } = this.state
        const { fetching } = this.props;

        switch(form) {
            case this.forms.JOINING:
                return <HomeTransition 
                    transitionKey="join"
                    element={JoinGameForm} 
                    fetching={fetching}
                    toggleForm={this.handleToggleForm}
                />
            case this.forms.CREATING:
                return <HomeTransition 
                    transitionKey="create"
                    element={CreateGameForm} 
                    fetching={fetching} 
                    toggleForm={this.handleToggleForm}
                />
            default:
                return null;
        }
    }

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
                    <h6>
                        (Unofficial btw)
                    </h6>
                    <div className="home-page-data-container">
                        <AnimatePresence>
                            {this.getForm()}
                        </AnimatePresence>
                    </div>
                </div>
            </FullPageContainer>
        );
    }
}


export default Home;