import React, { Component } from "react";
import './App.css';
import Input from './Input.js';
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./NavBar";
import {connect} from 'react-redux';
import {saveLogin }from './ItemInfos';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }
  
  setUsername(username) {
    this.setState({username: username})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }
  
  onSubmit = () =>{
      alert(this.state.username);
      let {username, password } = this.state;
      console.log(username);
      this.props.saveLogin(username);
      this.props.history.push('/');
  }
  //<Navbar data={this.state.username}/>
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <Input id ="username" labelName="Username: " placeholder="Username" inputType="text" parentFunction={this.setUsername}/>
          <Input id ="password" labelName="Password: " placeholder="Password" inputType="password" parentFunction={this.setPassword} /> 
          <input type="submit" value="login"/>
          <button>Forgot Password?</button>
        </form>
        
      </div>
    )
  }
}


const mapDispatchToProps= (dispatch)=>{
    
  return{
      saveLogin: (username)=>{dispatch(saveLogin(username))}
  }
}


export default connect (null,mapDispatchToProps)(withRouter(Login));