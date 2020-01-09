import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './Images/logo.png';
import './materialize.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
 class Navbar extends Component{
   render(){    
    console.log("this is homepage",this.props.data);
    const newlogin = this.props.data;
    console.log(newlogin);
    return(
            <nav className="nav-fixed">
                <div className="nar-wrapper">
                    <Link to="/"> <img src = {logo} height = "30" /></Link>
                    
                    <ul className="right">
                        <li><Link to="/cart"><MaterialIcon icon="shopping_cart"/><span class = "badge"><div className = "notify">5</div></span></Link></li>
                        <li><Link to="/signin">Login</Link></li>
                        <li><Link to="/signin">{newlogin}</Link></li>
                        <li>
                        <form>
                          <div class="input-field">
                            <input id="search" type="search" required/>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons" >close</i>
                          </div>
                        </form>
                        </li>
                    </ul>
                    
                </div>
            </nav>
    )
}
 }

export default Navbar;