import React, { Component } from 'react';
import { BrowserRouter,Route,Redirect, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

import Header from './components/shared/Header';
import RentalList from './components/rentals/rental-list/RentalListing';
import RentalDetail from "./components/rentals/rental-detail/RentalDetail";
import Register from "./components/register/Register";
import RentalCreate from "./components/rentals/rental-create/RentalCreate";
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
                    <Switch>
                      <Route exact path="/" render={()=><Redirect to="/rental"/>}/>
                      <Route exact path="/rental" component ={RentalList}/>
                      <ProtectedRoute exact path ='/rental/newrental' component = {RentalCreate}/>
                      <Route  exact path="/register" component ={Register}/>
                      <Route exact path="/login" component ={Login}/>
                      <Route exact path="/rental/:id" component ={RentalDetail}/>
                      <Route exact path="/rental/:city/homes" component ={RentalSearchListing}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
