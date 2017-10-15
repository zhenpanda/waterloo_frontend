import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Console from '../Console';
import Form from './Form';
import OrderForm from './OrderForm';
import Token from './Token';

class Seller extends Component {
  constructor () {
  super()
  this.state = {
    form: null,
    orderForm: null,
    contract: null
    }
  }
  componentDidMount() {
    this.props.fetchTokens();
    if(this.props.web3) this.props.fetchBalance(this.props.web3);
 
  }
  renderSellerBalance() {
    if(this.props.balance){
      if(this.props.balance[0].name === "Ether") {
        return(
          <div className="box">Your ETH Balance: {this.props.balance[0].balance}</div>
        )
      }
    }
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
    // if (!this.state.form) this.setState({form: true});
    // else this.setState({form: null});
    this.setState ({
        form: true,
        orderForm: false,
        contract: false
    })
  }
  showOrderFrom() {
    console.log("click show order form...");
    this.setState ({
      form: false,
      orderForm: true,
      contract: false
  })
  }
  renderState() {
    if( this.state.form ){
      return (<Form />)
    } else if ( this.state.orderForm ) {
      return (<OrderForm />)
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
                    <div className="seller-menu moveFromLeftFade">
                      <div className="seller-menu-text center aligh" onClick={() => {this.showSellerFrom()} }>Create Service</div>
                    </div>
                    <div className="seller-menu moveFromLeftFade delay100">
                      <div className="seller-menu-text center aligh" onClick={() => {this.showOrderFrom()} }>Create Orders</div>
                    </div>
                    <div className="seller-menu moveFromLeftFade delay180">
                      <div className="seller-menu-text center aligh">Find Orders</div>
                    </div>
                  </div>
                  <div className="sell-balance-info">
                    { this.renderSellerBalance() }
                  </div>
                </div>


              <div className="col s6 m6">
                <div className="form-block">
                  { this.renderState() }
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
  return { tokens: state.waterloo.tokens, balance: state.waterloo.balance, web3: state.waterloo.web3 }
}

export default connect(mapStateToProps, actions)(Seller);
