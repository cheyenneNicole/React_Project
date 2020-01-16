import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './Images/logo.png';
import './materialize.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {FiShoppingCart} from 'react-icons/fi';
import TextField from '@material-ui/core/TextField';
import {IoIosSearch} from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import  SearchBar from './SearchBar';
import cartAdder from './cartAdder';
const Navbar = ({username, quantity}) => {
    return(
            <nav className="nav-fixed">
                <div className="nar-wrapper">
                    <Link to="/"> <img src = {logo} height = "30" /></Link>
                    <ul className="right">
                        <li><Link to="/cart">{quantity}<FiShoppingCart/></Link></li>

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
    quantity: state.quantity
  }
}

export default connect (mapStateToProps, null) (Navbar);