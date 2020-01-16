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
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.name}/>
            <span >{item.name}</span>
            <br></br>
            <span > {item.description}</span>
            <br></br>
            <span >{item.inStock}</span>
            <br></br>
            <span >SKU #: {item.sku}</span>
            <br></br>
            <span >Pick a color: <CirclePicker 
              color={ item.color }
              onChangeComplete={ this.handleChangeComplete }
            /></span>
            <br></br>
            <span>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Rating</Typography>
              <Rating name="read-only" value={item.stars} readOnly />
            </Box>
            </span>
            <br></br>
            <span>{item.features}</span>
            <br></br>
            <span>{item.details}</span>
            <br></br>
            <span to="/cart" onClick={()=>{this.handleClick(item.id)}}><AiOutlinePlus/></span>
          </div>
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