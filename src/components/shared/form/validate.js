 import {Email_regex} from '../../../config/config'


export const required =  value =>( value ? undefined : "This field  is required")

 const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

  const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const email = value =>
   value && !Email_regex.test(value) ? "Your Email Does not match standard Email email@mail.com" :undefined


export const minLength7 = minLength(7)
export const maxLength40 = maxLength(40)