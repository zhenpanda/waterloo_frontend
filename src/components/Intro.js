import React, { Component } from 'react';

import logo from '../assets/images/cong_logo.png';
import $ from 'jquery';

class Intro extends Component {
  componentDidMount() {
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
  render() {

    return (
      <div>
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
    )
  }
}

export default Intro;
