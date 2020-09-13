import React, { Component } from 'react';

class TextField extends Component {

    handleChange = (e) => {
        const { 
            maxLength, 
            field: { value, name }, 
            onChange,
            form: { setFieldValue } 
        } = this.props;
    
        if (maxLength && e.target.value.length <= maxLength) {
            setFieldValue(name, e.target.value);
        }
    }
    
    render() { 
        const { field, form, labelText, className } = this.props;
        const { ...fieldData } = field;
        const { errors } = form;

        return (
            <div className="form-text-field">
                <label>
                    {labelText}
                    <input 
                        type="text" 
                        {...fieldData}
                        className={className}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </label>
                { errors[field.name] && (
                    <span className="form-text-field-error">
                        {errors[field.name]}
                    </span>
                )}
            </div>
        )
    }
}
 
export default TextField;