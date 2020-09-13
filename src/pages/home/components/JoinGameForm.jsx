import React, { Component } from 'react';

import { compose } from "redux";
import { withFormik, Form, Field } from 'formik';

import Button from 'pages/components/Button';
import TextField from 'pages/components/TextField';
import RegionPicker from 'pages/components/RegionPicker';
import { connect } from 'react-redux';
import { selectors, actions } from "reducer/home";
import * as Yup from "yup";
import { getI18n } from 'util/i18n';

class JoinGameForm extends Component {
    render() { 
        const { fetching, toggleForm, isSubmitting } = this.props;
        
        return (
            <Form>
                <span className="home-page-data-title">
                    {getI18n("home.join")}
                </span>
                <div className="code-input-cont">
                    <Field
                        name="code"
                        component={TextField}
                        labelText={getI18n("home.join.code")}
                        maxLength={4}
                        pattern="^/[A-Za-z]+$/"
                        className="code-input"
                    />
                </div>
                <div className="region-cont">
                    <Field
                        name="region"
                        labelText={getI18n("home.join.region")}
                        component={RegionPicker}
                        options={[
                            {
                                id: "usa",
                                value: getI18n("home.join.region.usa")
                            }, {
                                id: "eur",
                                value: getI18n("home.join.region.europe")
                            }, {
                                id: "asia",
                                value: getI18n("home.join.region.asia")
                            }
                        ]}
                    />
                </div>
                <Button 
                    type="submit" 
                    text={getI18n("home.join.enter")}
                    loading={isSubmitting}
                />
                <Button
                    type="button"
                    text={getI18n("home.join.create")}
                    textButton
                    className="change-game-text"
                    onClick={toggleForm}
                />
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    fetching: selectors.getFetching(state),
})

const mapDispatchToProps = (dispatch) => ({
    submit: (code, region, formikBag) => dispatch(actions.getGameRequest(code, region, formikBag)),
});
 
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withFormik({
        validateOnChange: false,
        validateOnBlur: false,
        mapPropsToValues: () => ({
            code: "",
            region: {
                id: "usa",
                value: "USA"
            },
        }),
        validationSchema: Yup.object().shape({
            code: Yup.string().required("Please specify a game code!").test("len", "Wrong format!", val => !!val && val.length === 4),
        }),
        handleSubmit: ({ code, region }, formikBag) => {
            const { submit, isSubmitting } = formikBag.props;
            if (!isSubmitting) {
                submit(code, region, formikBag);
            }
        },
    }),
// @ts-ignore
)(JoinGameForm);