import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {OgaInput} from '../shared/form/OgaInput';
import {OgaError} from '../shared/form/OgaError';

const validate = values => {
  const errors = {}
  if (!values.username) {
     errors.username = "Please enter a username"
  }else if(values.username.length < 4){
      errors.username ="Your username is to short"
  }
  if (!values.email) {
    errors.email = "Please enter your email"
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email ="Your email does not match standard emails"
  }
  if (!values.password) {
    errors.password ="Please enter a password"
  }
  else if(values.password.length < 7){
    errors.password ="Password should be greater than 7 characters "
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm ="Please Re-enter your password"
  }
  if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm =" Your confirmation  password is incorrect"
  }
    
  return errors
}

const warn = values=>{
   const warning = {}
   if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
      warning.username=" username should not be an email"
   }
   return warning
}


const RegisterForm = props => {
  const { errors, Submit,handleSubmit ,valid, pristine,  submitting } = props
  return (
    <form onSubmit={handleSubmit(Submit)}>
          <Field
            name="username"
            component={OgaInput}
            type="text"
            placeholder="Username"
            className="form-control"
            label="Username"
          />
          <Field
            name="email"
            component={OgaInput}
            type="email"
            placeholder="Email"
            label="Email"
            className="form-control"
          />
          <Field
            name="password"
            component={OgaInput}
            type="password"
            placeholder="password"
            className="form-control"
            label="Password"
          />
          <Field
            name="passwordConfirm"
            component={OgaInput}
            type="password"
            placeholder="repeat password"
            className="form-control"
            label="Confirm Password"
          />
        <button type="submit" disabled={ !valid || pristine || submitting}   className="btn btn-bwm bwm-form">
          Submit
        </button>
       
       <OgaError  errors ={errors}/>
    </form>
  )
}

export default reduxForm({
  form: 'RegisterForm',
  validate,
  warn
})(RegisterForm)