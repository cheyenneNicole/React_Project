import React, {Component} from 'react';
import './App.css';
import Navbar from './NavBar';
import Home from './Home';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Item from './Item';
import 'materialize-css/dist/css/materialize.min.css';
import FooterPage from './Footer'
import desp from './DescriptionPage';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.searchUser = this.searchUser.bind(this);
  }
  searchUser(username) {
    console.log(username);
  }
  render(){
  return (
    
    <Router>
      <div>
        <Navbar/>
        <Switch >
          <Route exact path = "/" component={Home}></Route>
          <Route exact path="/signin" component={Login}></Route>
          <Route exact path="/items" component={desp}></Route>
          <Route exact path="/cart" component={Item}></Route>
        </Switch>
      </div>
      <FooterPage/>
    </Router>
  );
}
}
