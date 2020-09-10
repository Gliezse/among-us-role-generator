import React, { Component } from 'react';

import { compose } from "redux";
import { withFormik, Form, Field } from 'formik';
import Button from 'pages/components/Button';

class JoinGameForm extends Component {
    render() { 
        return (
            <Form>
                <span className="home-page-data-title">
                    Unirse a una sala
                </span>
                <Field 
                    type="text" 
                    name="code"
                />
                <Button />
            </Form>
        );
    }
}
 
export default compose(
    withFormik({
        validateOnBlur: false,
        mapPropsToValues: () => ({
            code: ""
        }),
        handleSubmit: () => {},
    })
// @ts-ignore
)(JoinGameForm);