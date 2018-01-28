import React from 'react'

 export const OgaTextBox = ({
    input,
    label,
    row,
    column,
    type,
    className,
    meta: { touched, error,warning}
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} rows={row} cols={column} className={className} type={type} > 

        </textarea>
      </div>
      <div>
      {touched && (error && <div className="alert alert-danger">{ error} </div>)}
      {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
      </div>
    </div>
  )
  