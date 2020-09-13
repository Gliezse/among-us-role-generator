import React, { Component } from 'react';
import classNames from 'classnames';

class RegionPicker extends Component {

    handleSelect = (option) => {
        const { field: { name }, form: { setFieldValue } } = this.props;

        setFieldValue(name, option);
    };

    getOptions = () => {
        const { options, field: { value } } = this.props;

        return options ? options.map(option => (
            <div 
                onClick={() => this.handleSelect(option)} 
                className={classNames(
                    "option", 
                    {selected: option.id === value.id}
                )}
                key={option.id}
            >
                {option.value}
            </div>
        )) : null;
    }

    render() { 
        const { labelText } = this.props;

        return (
            <div className="form-region-picker-field">
                <label>{ labelText }</label>
                <div className="region-picker-options">
                    {this.getOptions()}
                </div>
            </div>
        );
    }
}
 
export default RegionPicker;