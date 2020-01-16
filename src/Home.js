import React, {Component} from 'react';
import './materialize.css';
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import {chooseItem} from './ItemInfos';
import './App.css';
import { addToCart } from './ItemInfos';
import { MdAddBox } from 'react-icons/md';


class Home extends Component {

  handleClick = (id)=>{
    console.log(id);
    this.props.addToCart(id);
    this.props.history.push('/cart');
  }
  handleButton = (id) =>{
    this.props.chooseItem(id); 
    this.props.history.push('/items');
  }
  render(){
    let itemList = this.props.items.map(item=>{
        return(
            <div className="img-holder" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.name}/>
                        <br></br>
                        <span to="/items" onClick={() => {this.handleButton(item.id)}}>{item.name}</span>
                        <span to="/" onClick={()=>{this.handleClick(item.id)}} ><MdAddBox/></span>
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
      addToCart: (id) => {dispatch(addToCart(id))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



