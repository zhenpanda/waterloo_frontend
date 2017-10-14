import React, { Component } from 'react';

import $ from 'jquery';

import Console from '../Console';
import Form from './Form';

class Seller extends Component {
  constructor () {
  super()
  this.state = {
    form: null,
    contract: null
    }
  }
  renderSellerBalance() {
    // name of their token
    // almount of left
    // service type

  }
  showSellerFrom() {
    console.log("click show form...");
    this.setState({form: true})
    // $(".form-block").css('visibility', 'visible');
  }
  renderSellerForm() {
    if( this.state.form ){
      return (<Form />)
    }else if ( this.state.contract ) {
      return (<h1>List of contracts</h1>)
    }
  }
  render() {
    return (
      <div className="container">
        <Console />

        <div className="row">
          <div className="col s12 m12">
              <h2 className="main-header-text">Seller: <i className="fa fa-medkit" aria-hidden="true" /> Medical Provider </h2>

              <div className="row">
                <div className="col s3 m3">
                  <div className="test-box-tall">
                    <div className="seller-menu moveFromLeftFade"><div className="seller-menu-text" onClick={() => {this.showSellerFrom()} }>Create Service</div></div>
                    <div className="seller-menu moveFromLeftFade delay100"><div className="seller-menu-text">Accept Trade</div></div>
                    <div className="seller-menu moveFromLeftFade delay180"><div className="seller-menu-text">Propose Trade</div></div>
                  </div>
                  <div className="sell-balance-info">
                    { this.renderSellerBalance() }
                  </div>
                </div>


              <div className="col s6 m6">
                <div className="form-block">
                  { this.renderSellerForm() }
                </div>
              </div>

              <div className="col s3 m3">

              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Seller;
