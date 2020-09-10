import React, { Component } from 'react';

class Button extends Component {
    getContent = () => {
        const { loading, text } = this.props;
        return loading ? <img src="https://www.easylaundry.app/img/load.gif" height={200} width={200} /> : "Inngg";
    }

    render() {
        const { ...props } = this.props
        return (
            <div className="d-block">
                <button {...props} className="button">{ this.getContent() }</button>
            </div>
        )
    }
}
 
export default Button;