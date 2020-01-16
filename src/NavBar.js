import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './Images/logo.png';
import './materialize.css';
import {FiShoppingCart} from 'react-icons/fi';
import  SearchBar from './SearchBar';
import {connect} from 'react-redux';
import * as REACTDOM from 'react-dom';

const Navbar = ({username, amount}) => {
    console.log(username);
    return(
            <nav className="nav-fixed">
                <div className="nar-wrapper">
                    <Link to="/"> <img src = {logo} height = "30" /></Link>
                    <ul className="right">
                      <div className="container2">
                          <li><Link to="/cart">
                            <div className="notification">
                              <FiShoppingCart/>
                              <span class ="badge">{amount}</span>
                            </div>
                          </Link></li>
                        </div>
                        <li><Link to="/signin">{username === "" ? "Login" : username}</Link></li>
                        <li>
                        <form>
                          <div class="input-field">
                            <SearchBar/>
                            <i class="material-icons" >close</i>
                          </div>
                        </form>
                        </li>
                    </ul>
                    
                </div>
            </nav>
    )
}


 const mapStateToProps = (state)=>{
  return {
    username: state.username,
    amount: state.amount
  }
}

export default connect (mapStateToProps, null) (Navbar);