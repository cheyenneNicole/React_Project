import React, {Component} from 'react';
import './materialize.css';
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import {chooseItem} from './ItemInfos';
import './App.css';
import { addToCart, showQuantity } from './ItemInfos';
import { IoIosAdd } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

class Home extends Component {

  handleClick = (id)=>{
    this.props.addToCart(id);
    //alert(this.state.quantity);
    //this.props.showQuantity(quantity);
    this.props.history.push('/cart');
  }

  handleButton = (id) =>{
    this.props.chooseItem(id); 
    this.props.history.push('/items');
  }
  render(){
    let itemList = this.props.items.map(item=>{
        return(
            <div className="wrapper" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.name}/>
                        <div>
                          <h2>
                          <span to="/items" onClick={() => {this.handleButton(item.id)}}>{item.name}</span>
                          </h2>
                        </div>
                        <div>
                        <span to="/" onClick={()=>{this.handleClick(item.id)}} ><IoIosAdd/></span>
                        </div>
                    </div>

                    <div className="card-content">
                        <p><b>Price: ${item.priceTotal}</b></p>
                    </div>
             </div>
        )
    })
    console.log(itemList)
    return(
      <div className="container">
          <h3 className="center">Our items</h3>
          <div className="box">
              {itemList}
          </div>
      </div>
  )
}
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      chooseItem: (id) => {dispatch(chooseItem(id))},
      addToCart: (id) => {dispatch(addToCart(id))},
      //showQuantity: (quantity) => {dispatch(showQuantity(quantity))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));



