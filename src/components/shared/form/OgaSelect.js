import React from 'react'

 export const OgaSelect = ({
    input,
    label,
    className,
    placeholder,
    meta: { touched, error,warning}
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <select {...input} className={className} >
          <option > name</option>
          <option > name</option>
          <option > name</option>
        </select>
      </div>
      <div>
      {touched && (error && <div className="alert alert-danger">{ error} </div>)}
      {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
      </div>
    </div>
  )
  