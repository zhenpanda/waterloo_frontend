import React, { Component } from 'react';

class Token extends Component {
  render() {
    return (
      <div className="moveFromRightFade"  key={this.props.key}>
         <div className="flipInTop box">
          <h4 className="">Name: <span className="">{this.props.name}</span></h4>
          <div className="">Symbol: <span className="">{this.props.symbol}</span></div>
          <div className="">Date Created: <span className="">{this.props.dateCreated}</span></div>
         </div>
      </div>
    )
  }
}
export default Token;
