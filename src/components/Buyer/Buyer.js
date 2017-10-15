import React, { Component } from 'react';

import $ from 'jquery';

import ConsoleB from '../ConsoleB';

class Buyer extends Component {
  componentDidMount() {
    $('.App').addClass("white-bg");
  }
  render() {
    return (
      <div className="container white-bg">
        <ConsoleB className="black-color" />
          <h2 className="black-color">Buyer Page</h2>
          <div>

          </div>
      </div>
    )
  }
}

export default Buyer;
