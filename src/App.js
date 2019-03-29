import React, { Component } from 'react';
import Header from './shared/Header';
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import RentalList from './components/rentals/rental-list/RentalListing';
import RentalDetail from "./components/rentals/rental-detail/RentalDetail";
import {Provider} from 'react-redux';
import Register from "./components/register/Register";
import {Login} from './components/login/Login'

const store = require('./reducers/index').init()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Header/>
                  <div className='container'>
                      <Route exact path="/" render={()=><Redirect to="/rental"/>}/>
                      <Route exact path="/rental" component ={RentalList}/>
                      <Route exact path="/rental/:id" component ={RentalDetail}/>
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
