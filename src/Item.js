import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subQuantity,increaseQuantity, decreaseQuantity, showQuantity} from './ItemInfos'
import Checkout from './Checkout';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import DescriptionPage from './DescriptionPage';


class Item extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
        //this.props.showQuantity(quantity);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
        //this.props.showQuantity(quantity);
    }

    handleSubQuantity = (id)=>{
        this.props.subQuantity(id);
        //this.props.showQuantity(quantity);
    }
    render(){    

        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.priceTotal}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}><IoIosArrowUp/></i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubQuantity(item.id)}}><IoIosArrowDown/></i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                    )
                })
            ):

             (
                <p>Cart is Empty</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Checkout/> 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subQuantity: (id)=>{dispatch(subQuantity(id))},
        //showQuantity: (quantity) =>{dispatch(showQuantity(quantity))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)