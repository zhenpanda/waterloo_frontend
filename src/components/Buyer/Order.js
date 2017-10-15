import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import $ from 'jquery';

class Order extends Component {
  componentDidMount() {
    if (!this.props.tokens) {
      this.props.fetchTokens();
    }
  }
  removeOrder() {
    if (this.props.el) {
      console.log("remove target element");
      $("#"+this.props.el).remove();
    }
  }
  renderFillBox() {
    let el = this.props.uqiKey;
    return(
      <div onClick={ () => this.props.fillOrder(el) }>Fill Order</div>
    )
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

      // console.log(aToken,bToken);
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
      <div className="row">
        <div className="col s8 m8">
          <div className="black-box moveFromBottomFade order-block">
            <h4 className="black-color">{ this.renderOrders() }</h4>
          </div>
        </div>
        <div className="col s4 m4">
          <div className="black-box moveFromBottomFade order-block">
            <h4 className="black-color">{ this.renderFillBox() }</h4>
            { this.removeOrder() }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    el: state.waterloo.el,
    tokens: state.waterloo.tokens
  }
}

export default connect(mapStateToProps, actions)(Order);
