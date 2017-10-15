import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import $ from 'jquery';

import ConsoleB from '../ConsoleB';
import OrderList from './OrderList';

class Buyer extends Component {
  constructor () {
  super()
  this.state = {
    orders: null,
    bounty: null
    }
  }
  componentDidMount() {
    $('.App').addClass("white-bg");
    this.props.fetchExchange();
  }
  showOrderList() {
    this.setState({
      orders: true,
      bounty: null
    });
  }
  showBounty() {
    console.log("show bounty...");
    this.setState({
      bounty: true,
      orders: null
    });
  }
  renderBuyerArea() {
    if( this.state.orders ) {
      // console.log(this.props.exchange);
      if ( this.props.exchange ) {
        return (<OrderList data={this.props.exchange} />)
      }
    } else if ( this.state.bounty ) {
      return (<h1 className="black-color">Create a bounty</h1>)
    }
  }
  render() {
    return (
      <div className="container white-bg">
        <ConsoleB className="black-color" />

        <div className="row">
          <div className="col s12 m12">
              <h2 className="main-header-text black-color">Buyer: <i className="fa fa-user" aria-hidden="true" /> Service Buyer </h2>

              <div className="row">
                <div className="col s3 m3">
                  <div className="test-box-tall">
                    <div className="buyer-menu moveFromLeftFade delay100"><div className="buyer-menu-text center aligh" onClick={() => this.showOrderList()}>Find Orders</div></div>
                    <div className="buyer-menu moveFromLeftFade"><div className="buyer-menu-text center aligh" onClick={() => this.showBounty()}>Create Bounty</div></div>
                  </div>
                  <div className="sell-balance-info">
                  </div>
                </div>

              <div className="col s9 m9">

                <div className="form-block">
                  { this.renderBuyerArea() }
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { exchange: state.waterloo.exchange }
}

export default connect(mapStateToProps, actions)(Buyer);
