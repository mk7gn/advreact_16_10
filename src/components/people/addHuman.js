import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'

class AddHuman extends Component {
    render() {
        return (
            <div>
                <h3>Add people</h3>
                <form onSubmit = {this.props.handleSubmit}>
                    <Field name = 'firstName' component = {ErrorField} type = 'text' label = 'first name' />
                    <Field name = 'lastName' component = {ErrorField} type = 'text' label = 'last name' />
                    <Field name = 'email' component = {ErrorField} type = 'text' label = 'email'/>
                    <div>
                        <input type = 'submit'/>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = ({ firstName, lastName,  email }) => {
    const errors = {}

    if (!email) errors.email = 'email is a required field'
    if (!firstName) errors.firstName = 'first name is a required field'
    if (!lastName) errors.lastName = 'last name is a required field'

    if (email && !emailValidator.validate(email)) errors.email = 'invalid email'

    return errors
}

export default reduxForm({
    form: 'people',
    validate
})(AddHuman)
