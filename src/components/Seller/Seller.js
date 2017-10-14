import React, { Component } from 'react';

import Console from '../Console';

class Seller extends Component {
  renderSellerBalance() {
    // name of their token
    // almount of left
    // service type
  
  }
  render() {
    return (
      <div>
        <Console />

        <div className="row">
          <div className="col s12 m12">
            <h2 className="main-header-text">Seller: <i className="fa fa-medkit" aria-hidden="true" /> Medical Provider </h2>

            <div className="row">
              <div className="col s2 m2">
                <div className="test-box-tall">
                  <div className="seller-menu moveFromLeftFade"><div className="seller-menu-text">Create Service</div></div>
                  <div className="seller-menu moveFromLeftFade delay100"><div className="seller-menu-text">Accept Trade</div></div>
                  <div className="seller-menu moveFromLeftFade delay180"><div className="seller-menu-text">Propose Trade</div></div>
                </div>
                <div className="sell-balance-info">
                  { this.renderSellerBalance() }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col s6 m6">

              </div>
            </div>

            <div className="row">
              <div className="col s4 m4">

              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Seller;
