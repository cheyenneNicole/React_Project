import React, {Component} from 'react';
import { addToCart } from './ItemInfos';
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class DescriptionPage extends Component {
        handleClick = (id)=>{
          this.props.addToCart(id); 
        }
        render(){
            let itemList = this.props.items.map(item=>{
              return(
                <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.name}/>
                    <span >{item.name}</span>
                    <span > {item.description}</span>
                    <span >{item.inStock}</span>
                    <span >{item.sku}</span>
                    <span >{item.colors}</span>
                    <span>{item.stars}</span>
                    <span>{item.features}</span>
                    <span>{item.details}</span>
                    <span to="/cart" className="btn-floating" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">Add to cart</i></span>
                </div>
                <div className="card-content">
                    <p><b>Price: ${item.priceTotal}</b></p>
                </div>
         </div>
         );
})
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
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(DescriptionPage)