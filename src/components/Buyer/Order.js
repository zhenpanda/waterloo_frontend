import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Order extends Component {
  componentDidMount() {
    if (!this.props.tokens) {
      this.props.fetchTokens();
    }
  }
  renderOrders() {
    if (this.props.tokens) {
      let aToken;
      let bToken;
      let aTokenAmount;
      let bTokenAmount;

      for(let t=0; t<this.props.tokens.length; t++) {
        if (this.props.data.takerTokenAddress === this.props.tokens[t].contractAddress) {
          bToken = this.props.tokens[t].name
          bTokenAmount =  this.props.data.takerTokenAmount
        }
        if (this.props.data.makerTokenAddress === this.props.tokens[t].contractAddress) {
          aTokenAmount =  this.props.data.makerTokenAmount
          aToken = this.props.tokens[t].name
        }
      }
      console.log(aToken,bToken);
      return(
        <span>
          {aTokenAmount}: [{aToken}]    ->    {bTokenAmount}: [{bToken}] 
        </span>
      )
    }
  }
  render() {
    // console.log(this.props.data);
    return (
      <div className="black-box moveFromBottomFade order-block">
        <h4 className="black-color">{ this.renderOrders() }</h4>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tokens: state.waterloo.tokens
  }
}

export default connect(mapStateToProps, actions)(Order);
