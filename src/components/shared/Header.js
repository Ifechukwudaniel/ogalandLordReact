import React ,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import RentalSearchInput from '../rentals/rental-list/RentalSearchInput'
class Header extends Component  {
  constructor() {
    super();

     this.handleLogout = this.handleLogout.bind(this);
        
      this.state =  {
        show: false,
        showClass : "collapse navbar-collapse"
    }  
  }
  
  handleShowState =()=>{
    this.state.show ? 
    this.setState({show: false, showClass :"collapse navbar-collapse " }):  
    this.setState({show: true, showClass:"collapse navbar-collapse show" })
  }

  handleShow=()=>{
    this.handleShowState();
  }

   handleLogout() {
    this.props.logout();
    this.props.history.push('/rentals');
  }

   renderAuthButtons() {
    const {isAuth} = this.props.auth;

     if (isAuth) {
      return <a className='nav-item nav-link clickable' href="/rental" onClick={this.handleLogout}>Logout</a>
    }

     return (
        <React.Fragment>
          <Link className='nav-item nav-link active' to='/login'>Login <span className='sr-only'>(current)</span></Link>
          <Link className='nav-item nav-link' to='/register'>Register</Link>
        </React.Fragment>
      )
  }
  render(){
      return (
        <div className="Header">
                <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
            <div className='navbar-brand'>
            <button className='navbar-toggler'  onClick={this.handleShow} type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <Link to="/rental">B</Link>
              </div>
             <RentalSearchInput/>
              <div className= {this.state.showClass} id='navbarNavAltMarkup'>
                <div className='navbar-nav ml-auto'>
                  {this.renderAuthButtons()}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )
  }
}
function mapStateToProps(state) {
    return{
      auth: state.auth
    }
}

export default  withRouter(connect(mapStateToProps)(Header))