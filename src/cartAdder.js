import React from 'react';


export default class cartAdder extends React.Component {
    constructor(props) {
      super(props);
      this.showOverlay = this.showOverlay.bind(this);
    }
    showOverlay() {
      document.getElementById('overlay').style.display = 'flex';
      document.querySelector('body').style.overflow = 'hidden';
    }
    render() {
      return (
        <div id="cart">
          <span className={this.props.quantity === 0 ? "hide-price" : ""}>{this.props.quantity}</span>
          <i className="fas fa-shopping-cart"
            onClick={this.showOverlay}></i>
        </div>
      )
    }
  }