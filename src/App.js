import React, { Component } from 'react';
import Header from './components/shared/Header';
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import RentalList from './components/rentals/rental-list/RentalListing';
import RentalDetail from "./components/rentals/rental-detail/RentalDetail";
import {Provider} from 'react-redux';
import Register from "./components/register/Register";
import Login from './components/login/Login'
import  {ProtectedRoute} from './components/shared/auth/ProtectedRoute'
import RentalSearchListing from './components/rentals/rental-list/RentalSearchListing'
import * as actions from '../src/actions/index'


const store = require('./reducers/index').init()

class App extends Component {
  componentWillMount(){
     this.checkAuthStatus()
  }
  checkAuthStatus =()=>{
   store.dispatch(actions.authStatus())
  }

  logout =()=>{
    store.dispatch(actions.logout())
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Header logout= {this.logout}/>
                  <div className='container'>
                      <Route exact path="/" render={()=><Redirect to="/rental"/>}/>
                      <Route exact path="/rental" component ={RentalList}/>
                      <Route exact path="/rental/:id" component ={RentalDetail}/>
                      <Route exact path="/rental/:city/homes" component ={RentalSearchListing}/>
                      <Route  exact path="/register" component ={Register}/>
                      <Route exact path="/login" component ={Login}/>
                </div>
            </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
