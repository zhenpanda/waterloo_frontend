import React, { Component } from 'react';

import logo from '../assets/images/cong_logo.png';

class Console extends Component {
  render() {
    return (
      <div>
        <div className="row moveFromTopFade">
          <div className="col s9 m9">
            <img src={logo} alt="" className="logo-header" />
          </div>
          <div className="col s3 m3">
            { this.props.balance }
          </div>
        </div>
        <hr className="white-hr" />
      </div>
    )
  }
}

export default Console;
