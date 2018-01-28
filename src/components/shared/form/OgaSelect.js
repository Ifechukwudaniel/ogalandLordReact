import React from 'react'

 export const OgaSelect = ({
    input,
    label,
    className,
    options,
    meta: { touched, error,warning}
  }) => {

   const  renderOption =()=>{
   return   options.map((option,i)=>{
      return <option key={i} value={option} >  {option}</option>
    })
  }
    return(
    <div>
      <label>{label}</label>
      <div>
        <select {...input} className={className} >
            {renderOption()}
        </select>
      </div>
      <div>
      {touched && (error && <div className="alert alert-danger">{ error} </div>)}
      {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
      </div>
    </div>
    )
  }
  