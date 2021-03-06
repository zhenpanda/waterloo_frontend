import React, { Component } from 'react';
import Order from './Order';

class OrderList extends Component {
  render() {
    // console.log(this.props.data);
    let exchangeAsList = this.props.data.reverse().map( (c,i,a) => {
      // console.log(uqi);
      let uqi = i+"block";
      return (
        <div key={i} id={uqi}>
          <Order data={c} uqiKey={uqi} />
        </div>
      )
    })

    return (
      <div className="black-box-big">
        {exchangeAsList}
      </div>
    )
  }
}

export default OrderList;
