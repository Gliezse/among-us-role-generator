import React, { Component } from 'react';

import { compose } from "redux";
import { withFormik, Form, Field } from 'formik';
import Button from 'pages/components/Button';
import TextField from 'pages/components/TextField';

class JoinGameForm extends Component {
    render() { 
        return (
            <Form>
                <span className="home-page-data-title">
                    Unirse a una sala
                </span>
                <Field
                    name="code"
                    component={TextField}
                    labelText="asdasd"
                    maxLength={4}
                    pattern="^/[A-Za-z]+$/"
                    className="code-input"
                />
                <Button type="submit" />
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