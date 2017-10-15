import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import $ from 'jquery';
import { Route } from 'react-router-dom';

import Intro from './Intro';
import Buyer from './Buyer/Buyer';
import Seller from './Seller/Seller';

class App extends Component {
  // componentWillMount() {
  //   // click on the window click out the window to reload
  //   $(window).focus( () => {
  //     console.log("reloading...");
  //     window.location.reload();
  //   });
  // }
  renderContent() {
    if (window.web3) {
      console.log(window.web3.eth.coinbase);
      // let webInfo = window.web3.eth.coinbase;
      this.props.changeWeb3(window.web3.eth.coinbase);
      switch (window.web3.eth.coinbase) {
        case "0x5409ed021d9299bf6814279a6a1411a7e866a631": return(<Route path="/" component={ Buyer } />)
        case "0x6ecbe1db9ef729cbe972c83fb886247691fb6beb":return(<Route path="/" component={ Seller } />)
        default: return(<Route path="/" component={ Intro } />);
      }
    }else{
      return(<Route path="/" component={ Intro } />)
    }
  }
  render() {
    return (
      <div className="App">
        { this.renderContent() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { test: state.waterloo.test }
}

export default connect(mapStateToProps, actions)(App);
