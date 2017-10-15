import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Console from '../Console';
import Form from './Form';
import Token from './Token';

class Seller extends Component {
  constructor () {
  super()
  this.state = {
    form: null,
    contract: null
    }
  }
  componentDidMount() {
    this.props.fetchTokens();
  }
  renderSellerBalance() {
    // name of their token
    // almount of left
    // service type
  }
  renderTokens() {
    if (this.props.tokens) {
      let tokenList = this.props.tokens.reverse().map( (b,i,a) => {
        let uqi = i+b.name;
        // console.log(uqi);
        return (
          <div key={uqi}>
            <Token name={b.name} keyz={uqi} symbol={b.symbol} dateCreated={b.dateCreated} balance={b.balance} />
          </div>
        )
      })
      return  <div className="token-list"> { tokenList } </div>
    }
  }
  showSellerFrom() {
    console.log("click show form...");
    if (!this.state.form) this.setState({form: true});
    else this.setState({form: null});
  }
  renderSellerForm() {
    if( this.state.form ){
      return (<Form />)
    } else if ( this.state.contract ) {
      return (<h1>List of contracts</h1>)
    }
  }
  render() {
    return (
      <div className="container">
        <Console />

        <div className="row">
          <div className="col s12 m12">
              <h2 className="main-header-text">Seller: <i className="fa fa-medkit" aria-hidden="true" /> Medical Service Provider </h2>

              <div className="row">
                <div className="col s3 m3">
                  <div className="test-box-tall">
                    <div className="seller-menu moveFromLeftFade"><div className="seller-menu-text center aligh" onClick={() => {this.showSellerFrom()} }>Create Service</div></div>
                    <div className="seller-menu moveFromLeftFade delay100"><div className="seller-menu-text center aligh">Create Orders</div></div>
                    <div className="seller-menu moveFromLeftFade delay180"><div className="seller-menu-text center aligh">Find Orders</div></div>
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
                {/* show addtional options */}
                { this.renderTokens() }
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tokens: state.waterloo.tokens }
}

export default connect(mapStateToProps, actions)(Seller);
