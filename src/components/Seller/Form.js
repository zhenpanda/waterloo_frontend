import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import $ from 'jquery';

class Form extends Component {
  createToken() {
    let name = $('#service-name').val();
    let symbol = $('#symbol-name').val();
    let total = $('#symbol-total').val();
    let expiration = $('#expiration').val();
    let token;
    if (this.props.web3) {
      token = {
        name: name,
        symbol: symbol,
        initialAmount: total,
        expirationDate: expiration,
        address: this.props.web3
      };
    }
    $(".seller-form").css({ opacity: 0.1337 });
    this.props.pushToken(token);
  }
  render() {
    return (
        <form className="seller-form box">
          <div className="moveFromBottomFade row">
            <div className="input-field col s6 m6">
              <input placeholder="Service Name" id="service-name" type="text" className="validate" />
            </div>
            <div className="input-field col s6 m6">
              <input placeholder="Service Symbol" id="symbol-name" type="text" className="validate" />
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="col s12 m12">
              Number of Token to issue:
              <div className="input-field inline">
                <input type="text" className="validate" id="symbol-total" />
              </div>
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="col s12 m12">
              Days until token expires:
              <div className="input-field inline">
                <input type="text" className="validate" id="expiration" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12">
              <div className="box create-tokens-btn" onClick={() => { this.createToken() }}>
                <div className="center aligh">Create Service Tokens</div>
              </div>
            </div>
          </div>

        </form>
    )
  }
}

function mapStateToProps(state) {
  return {web3: state.waterloo.web3}
}

export default connect(mapStateToProps, actions)(Form);
