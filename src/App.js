import React, { Component } from 'react';
import Header from './shared/Header';
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import RentalList from './components/rentals/rental-list/RentalListing';
import RentalDetail from "./components/rentals/rental-detail/RentalDetail";
import {Provider} from 'react-redux';

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
                </div>
            </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
