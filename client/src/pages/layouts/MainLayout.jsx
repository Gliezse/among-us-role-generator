import React, { Component } from 'react';
import { Route } from 'react-router';
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from 'pages/layouts/components/motions';

class MainLayout extends Component {
    getComponent = (Component) => {
        return (
            <motion.div 
                initial="out" 
                animate="in" 
                exit="out"
                variants={pageVariant}
                transition={pageTransition}
            >
                <Component />
            </motion.div>
        )
    }

    render() { 
        const { component: ReceivedComponent, ...props } = this.props;

        return <Route {...props} render={() => this.getComponent(ReceivedComponent)} />;
    }
}
 
export default MainLayout;