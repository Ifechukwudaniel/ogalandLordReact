import React ,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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
    console.log("dede")
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
              <Link to="/rental" className='navbar-brand'> <b> <span className="fa fa-building"></span>LANDLORD </b></Link>
              <form className='form-inline my-2 my-lg-0'>
                <input className='form-control mr-sm-2 bwm-search' type='search' placeholder="Try 'New York'" aria-label='Search'/>
                <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search'>Search</button>
              </form>
              <button className='navbar-toggler'  onClick={this.handleShow} type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
            
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