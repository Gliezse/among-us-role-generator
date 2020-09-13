import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { homePageVariant, homePageTransition } from 'pages/layouts/components/motions';

class HomeTransition extends Component {
    render() { 
        const { element: Element, transitionKey, ...props } = this.props;

        return (
            <motion.div
                variants={homePageVariant}
                transition={homePageTransition}
                key={transitionKey}
                initial="out" 
                animate="in" 
                exit="out"
            >
                <Element {...props} />
            </motion.div>
        );
    }
}
 
export default HomeTransition;