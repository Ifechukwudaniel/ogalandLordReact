import React,{Component} from 'react'

 export class OgaFileUpload  extends Component {
    onChange =(event)=>{
        const {'input':{onChange}} = this.props

        onChange('https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg');
    }

    render(){
     const {  label,className, meta: { touched, error,warning} } = this.props
        return(
            <div>
            <label>{label}</label>
            <div>
                <input  onChange ={this.onChange} className={className} type="file" />
            </div>
            <div>
            {touched && (error && <div className="alert alert-danger">{ error} </div>)}
            {touched && (warning && <div className="alert alert-warning">{warning} </div>)}
            </div>
            </div>
        )
    }
  }
  