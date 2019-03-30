import React from 'react'
import {OgaInput}  from '../shared/form/OgaInput';
import {OgaError} from '../shared/form/OgaError';
import {reduxForm,Field} from 'redux-form'
import {required, minLength7,email,maxLength40} from '../shared/form/validate'

const LoginForm  = props=> {
  const { errors, Submit,handleSubmit ,valid, pristine,  submitting} = props
  return (
   <form onSubmit={handleSubmit(Submit)}>
      <Field
       name="email"
       component = {OgaInput}
       type="email"
       label="Email"
       className="form-control"
       placeholder ="Email"
       validate = {[required,email,maxLength40]}
      />
       <Field
       name="password"
       component={OgaInput}
       type="password"
       label="Password"
       className="form-control"
       placeholder ="Password"
       validate ={[required,minLength7]}
      />

     <button type="submit" disabled={ !valid || pristine || submitting}   className="btn btn-bwm bwm-form">
          Submit
    </button>

     <OgaError errors={errors}/>
   </form>
  )
}

export default reduxForm({
    form: 'LoginForm'
  })(LoginForm)