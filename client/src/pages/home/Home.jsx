import React, { Component } from 'react'
import FullPageContainer from 'pages/components/FullPageContainer';
import JoinGameForm from 'pages/home/components/JoinGameForm';
import { AnimatePresence } from 'framer-motion';

class Home extends Component {

    forms = {
        JOINING: "joining",
        CREATING: "creating",
    }

    state = {
        form: this.forms.JOINING,
    }

    getForm = () => {
        const { form } = this.state
        const { fetching } = this.props;

        switch(form) {
            case this.forms.JOINING:
                return <JoinGameForm fetching={fetching} />
            case this.forms.CREATING:
                return null;
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