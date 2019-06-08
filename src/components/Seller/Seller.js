import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import { Scrollbars } from 'react-custom-scrollbars';

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
        let eth = this.props.balance[0].balance / 10 ** 18 ;
        if (this.props.payment) {eth+= this.props.payment}
        return(
          <div className="user-balance">Your Eth Balance: {eth}</div>
        )
      }
    }
  }
  renderTokens() {
    if (this.props.tokens) {
      let tokenList = this.props.tokens.map( (b,i,a) => {
        let uqi = i+b.name;
        // console.log(uqi);
        return (
          <div key={uqi}>
            <Token name={b.name} keyz={uqi} symbol={b.symbol} dateCreated={b.dateCreated} balance={b.balance} />
          </div>
        )
      })
      return  (
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax={500}
          thumbMinSize={30}
          universal={true}
          className="scrollbars-block">

            {/* render different types of students */}
            <div className="token-list moveFromRightFade"> { tokenList } </div>

        </Scrollbars>
      )

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
      <div className="black-backgroud">
        <Console balance={ this.renderSellerBalance() }/>

        <div className="container">


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
                  </div>
                  <div className="sell-balance-info">

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
        
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return { tokens: state.waterloo.tokens, balance: state.waterloo.balance, web3: state.waterloo.web3 }
}

export default connect(mapStateToProps, actions)(Seller);
