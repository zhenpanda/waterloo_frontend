import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import $ from 'jquery';

class OrderForm extends Component {

    componentDidMount() {
        console.log("show current tokems");
        if(!this.props.tokens){
            return;
        }
        console.log(this.props.tokens)
    }

  createOrder() {
    let takerToken = "0x48bacb9266a570d521063ef5dd96e61686dbe788"; //ethereum
    // let makerToken = $('#maker-token').val();
    let makerToken = "0x6b5081c44506cd7d9639976bec202f28e4a954c2";
    let takerValue = $('#taker-value').val();
    let makerValue = $('#maker-value').val();
    let formValues;
    if (this.props.web3) {
      formValues = {
        maker: this.props.web3,
        takerTokenAddress: takerToken,
        makerTokenAddress: makerToken,
        takerTokenAmount: takerValue,
        makerTokenAmount: makerValue
      };
    }

    $(".order-form").css({ opacity: 0.1337 });
    this.props.pushOrder(formValues);
  }
  render() {
    return (
        <form className="seller-form box">
          <div className="moveFromBottomFade row">
            <div className="input-field col s12 m12">
              <input placeholder="Service Offered" id="maker-token" type="text" className="validate" />
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="col s12 m12">
              Numb`er of Service Tokens for sale:
              <div className="input-field inline">
                <input type="text" className="validate" id="maker-value" />
              </div>
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="col s12 m12">
              Number of Payment Tokens desired:
              <div className="input-field inline">
                <input type="text" className="validate" id="taker-value" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12">
              <div className="box create-tokens-btn" onClick={() => { this.createOrder() }}>
                <div className="center aligh">Create Order</div>
              </div>
            </div>
          </div>

        </form>
    )
  }
}

function mapStateToProps(state) {
  return {web3: state.waterloo.web3,
    tokens: state.waterloo.tokens}
}

export default connect(mapStateToProps, actions)(OrderForm);
