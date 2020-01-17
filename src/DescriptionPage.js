import React, {Component} from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { addToCart } from './ItemInfos'
import {CirclePicker} from 'react-color';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './materialize.css';
import {AiOutlinePlus } from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'
class DescriptionPage extends Component {
  handleClick = (id)=>{
    this.props.addToCart(id); 
    this.props.history.push('/cart');
  }

render(){
  let addedItems = this.props.items.length ?
      (  
      this.props.items.map(item=>{
      return(
        <div>
        <div class="topnav" id="myTopnav">
          <a href="/" class="active"><IoMdArrowRoundBack/>Home</a>
          <i class="fa fa-bars"></i>
        </div>
        <div className="despPage1" key={item.id}>
            <div width = "50%" margin = "auto" padding="10px">
            <img src={item.img} margin= "0" alt={item.name}/>
            </div>
            <span >{item.name}</span>
            <br></br>
            <span > {item.description}</span>
            <br></br>
            <span >{item.inStock}</span>
            <br></br>
            <span >SKU #: {item.sku}</span>
            <br></br>
            <span>COLORS:{item.colors[0]}</span>
            <br></br>
              <form>
                <input 
                  class = "with-gap" 
                  type="radio" 
                  name = "colors" 
                  value = "Silver"
                />
                <span>Silver</span>
                <input 
                  class = "with-gap" 
                  type="radio" 
                  name = "colors" 
                  value = "Black" 
                />
                <span>Black</span>
            </form>
            <br></br>
            <span>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating</Typography>
              {item.stars === 5 ? "100% recommend" : item.stars === 4 ? "80% recommend" : item.stars === 3 ? "60% recommend" : item.stars === 2 ? "40% recommend" : "20% recommend"}
              <Rating name="read-only" value={item.stars} readOnly />
            </Box>
            </span>
            <br></br>
            <span>
              <button type="button">${item.priceMonthly}<br></br>24 Monthly payments</button>
              <button type="button">{item.priceTotal}<br></br>Retail price</button>
            </span>
            <br></br>
            <span>{item.features}</span>
            <br></br>
            <span>{item.details}</span>
            <br></br>
            <span to="/cart" onClick={()=>{this.handleClick(item.id)}}><AiOutlinePlus/></span>
          <div className="card-content">
            <p><b>Price: ${item.priceTotal}</b></p>
          </div>
        </div>
        </div>
      )
  })
      ):
      (
        <p>Opps...
        </p>
      )
  return(
    <div className="container">
        <div className="box">
            {addedItems}
        </div>
    </div>
  )
}
}
const mapStateToProps = (state)=>{
  return {
    items: state.addedItems
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(DescriptionPage)