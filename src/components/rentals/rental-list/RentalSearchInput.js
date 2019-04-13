import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'



class RentalSearchInput extends Component {
    constructor (){
         super();
         this.searchInput = React.createRef();
    }
    handleSearch = ()=>{
        const {history}  = this.props;
        const City = this.searchInput.current.value;

        City ?  history.push(`/rental/${City}/homes`) : history.push("/rental")
    }

     handleEnterPress = (e)=>{
         if (e.key === "Enter") {
              this.handleSearch()
         }
     }


    render() {
        return (
            <div className='form-inline my-2 my-lg-0'>
            <input 
            ref={this.searchInput}
            onKeyPress={this.handleEnterPress}
            className='form-control mr-sm-2 bwm-search' t
            ype='search' placeholder="Try 'New York'" 
            aria-label='Search' />
            <button onClick={this.handleSearch} className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search'>Search</button>
        </div>
        )
    }
}
export default withRouter(RentalSearchInput);