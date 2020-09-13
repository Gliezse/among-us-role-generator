import React, { Component } from 'react';
import classNames from "classnames";

class FullPageContainer extends Component {
    render() { 
        const { children, className } = this.props;
        return (
            <section className={
                classNames(
                    "full-page-container",
                    className
                )
            }>
                {children}
            </section>
        )    
    }
}
 
export default FullPageContainer;