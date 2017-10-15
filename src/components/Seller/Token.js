import React, { Component } from 'react';

class Token extends Component {
  render() {
    return (
       <div className="box seller-token">
        <h4 className="token-text">Name: <span className="">{this.props.name}</span></h4>
        <div className="token-text">Symbol: <span className="">{this.props.symbol}</span></div>
        <div className="token-text">Date Created: <span className="">{this.props.dateCreated}</span></div>
       </div>
    )
  }
}
// <div className="token-text">Balance: <span className="">{this.props.balance}</span></div>
export default Token;
