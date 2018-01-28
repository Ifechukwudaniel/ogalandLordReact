import React from 'react'
import {OgaInput}  from '../../shared/form/OgaInput';
import {OgaError} from '../../shared/form/OgaError';
import {reduxForm,Field} from 'redux-form'
import {required, maxLength40} from '../../shared/form/validate'

const RentalCreateForm  = props=> {
  const { errors, Submit,handleSubmit ,valid, pristine,  submitting} = props
  return (
   <form onSubmit={handleSubmit(Submit)}>
      <Field
       name="title"
       component = {OgaInput}
       type="text"
       label="Title"
       className="form-control"
       placeholder ="title"
       validate = {[required]}
      />
       <Field
       name="city"
       component={OgaInput}
       type="text"
       label="City"
       className="form-control"
       placeholder ='city try  "ABUJA" '
       validate ={[required]}
      />
      <Field
       name="street"
       component={OgaInput}
       type="text"
       label="Street"
       className="form-control"
       placeholder ='Street'
       validate ={[required]}
      />
       <Field
       name="BedRoom"
       component={OgaInput}
       type="number"
       label="BedRoom"
       className="form-control"
       placeholder ='Street'
       validate ={[required]}
      />
       <Field
       name="dailyRate"
       component={OgaInput}
       type="number"
       label="Price per day"
       className="form-control"
       placeholder ='Price per day'
       validate ={[required]}
      />

     <button type="submit" disabled={ !valid || pristine || submitting}   className="btn btn-bwm bwm-form">
          Create Rental
    </button>

     <OgaError errors={errors}/>
   </form>
  
  )
}

export default reduxForm({
    form: 'RentalCreateForm'
  })(RentalCreateForm)