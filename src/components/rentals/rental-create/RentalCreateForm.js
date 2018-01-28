import React from 'react'

import {OgaInput}  from '../../shared/form/OgaInput';
import {OgaTextBox}  from '../../shared/form/OgaTextBox';
import {OgaError} from '../../shared/form/OgaError';
import {required,minLength30, Isnumber} from '../../shared/form/validate'
import {OgaSelect} from '../../shared/form/OgaSelect';
import {OgaFileUpload} from '../../shared/form/OgaFileUpload';

import {reduxForm,Field} from 'redux-form'


const RentalCreateForm  = props=> {
  const { errors, Submit,handleSubmit ,valid, pristine,  submitting, options} = props
  return (
   <form onSubmit={handleSubmit(Submit)}>
      <Field
       name="title"
       component = {OgaInput}
       type="text"
       label="Title"
       className="form-control"
       validate = {[required]}
      />
      <Field
       name="description"
       component = {OgaTextBox}
       type="text"
       label="Description"
       column = {6}
       row= {3}
       className="form-control"
       validate = {[required,minLength30]}
      />
       <Field
       name="city"
       component={OgaInput}
       type="text"
       label="City"
       className="form-control"
       validate ={[required]}
      />
      <Field
       name="street"
       component={OgaInput}
       type="text"
       label="Street"
       className="form-control"
       validate ={[required]}
      />
      <Field
       name="category"
       component={OgaSelect}
       options = {options}
       type="text"
       label="Category"
       className="form-control"
       validate ={[required]}
      />
       <Field
       name="Image"
       component={OgaFileUpload}
       label="Image"
      />

    <Field
       name="Bedrooms"
       component={OgaInput}
       type="text"
       label="Bedrooms"
       className="form-control"
       validate ={[required, Isnumber]}
      />
      <Field
       name="DailyRate"
       component={OgaInput}
       type="text"
       label="DailyRate"
       className="form-control"
       validate ={[required, Isnumber]}
      />
     <button type="submit" disabled={ !valid || pristine || submitting}   className="btn btn-bwm bwm-form">
          Create Rental
    </button>

     <OgaError errors={errors}/>
   </form>
  
  )
}

export default reduxForm({
    form: 'rentalCreateForm'
  })(RentalCreateForm)