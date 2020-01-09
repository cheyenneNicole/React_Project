import React, {Component} from 'react';
import './materialize.css';
import { addToCart } from './ItemInfos';
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';


class Home extends Component {

  handleClick = (id)=>{
    //this.props.addToCart(id); 
    this.props.history.push('/items');
  }
  render(){
    let itemList = this.props.items.map(item=>{
        return(
            <div className="img-holder" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.name}/>
                        <span >{item.name}</span>
                        <span to="/" className="btn-floating" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p><b>Price: ${item.priceTotal}</b></p>
                    </div>
             </div>

        )
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

export default connect(mapStateToProps)(Home)



