import React from 'react'

 export const OgaInput = ({
    input,
    label,
    type,
    className,
    meta: { touched, error,warning}
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} className={className} placeholder={label} type={type} />
      </div>
      <div>
      {touched && (error && <div className="alert alert-danger">{ error} </div>)}
      {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
      </div>
    </div>
  )
  