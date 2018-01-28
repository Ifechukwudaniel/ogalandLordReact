import React from 'react'

 export const OgaInput = ({
    input,
    label,
    type,
    className,
    symbol,
    placeholder,
    meta: { touched, error,warning}
  }) => (
    <div>
      <label>{label}</label>
      <div className="input-group">
        { symbol &&
           <div className="input-group-prepend">
               <div className="input-group-text"> {symbol} </div>
           </div>
        }
        <input {...input} className={className} placeholder={placeholder} type={type} />
      </div>
      <div>
      {touched && (error && <div className="alert alert-danger">{ error} </div>)}
      {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
      </div>
    </div>
  )
  