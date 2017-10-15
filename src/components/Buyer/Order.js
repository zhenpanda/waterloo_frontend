import React, { Component } from 'react';

class Order extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="black-box moveFromBottomFade order-block">
        <h4 className="black-color">A Single Order</h4>
      </div>
    )
  }
}
export default Order;
