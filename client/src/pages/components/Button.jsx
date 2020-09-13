import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component {

    loading = () => {
        return "Loading...";
    }

    getContent = () => {
        const { loading, text } = this.props;
        return loading ? this.loading() : text;
    }

    render() {
        const { textButton, className, type, loading, ...props } = this.props
        return (
            <div className="d-block">
                <button type={type !== "submit" ? type : loading && "button" || "submit"} {...props} className={classNames(
                    "button", 
                    { "text-only": textButton }, 
                    className
                )}>
                    { this.getContent() }
                </button>
            </div>
        )
    }
}
 
export default Button;