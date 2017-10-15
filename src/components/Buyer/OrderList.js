import React, { Component } from 'react';
import Order from './Order';

class OrderList extends Component {
  render() {
    // console.log(this.props.data);
    let exchangeAsList = this.props.data.map( (c,i,a) => {
      let uqi = i+c.name;
      // console.log(uqi);
      return (
        <div key={uqi}>
          <Order data={c} />
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
