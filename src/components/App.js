import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import $ from 'jquery';
import logo from '../assets/images/cong_logo.png';

class App extends Component {
  componentWillMount() {
    let	$window = $(window),$body = $('body');
    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');
    // debugger;
    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

  }
  flashAddress() {
    if (this.props.ethAddress) {
      console.log(this.props.ethAddress);
    }
  }

  render() {
    return (
      <div className="App">
        {/* App contents lives here */}
        <div id="wrapper">

  					<header id="header">
  						<div className="logo">
                <div className="icons">
  							 <i className="cc ETH icon-size" title="ETH" />
                </div>
  						</div>
  						<div className="content">
  							<div className="inner">
  								<div>
                    <img className="splash-logo-block" src={logo} alt="" />
                  </div>
  								<p>A Decentralized Exchange for buying and selling healtcare services</p>
  							</div>
  						</div>
  					</header>

  					<div id="main">

            </div>

          </div>
    			<div id="bg"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ethAddress: state.waterloo.ethAddress }
}

export default connect(mapStateToProps, actions)(App);
