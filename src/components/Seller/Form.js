import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Form extends Component {
  render() {
    return (
        <form className="box">
          <div className="moveFromBottomFade row">
            <div className="input-field col s6 m6">
              <input placeholder="Service Name" type="text" className="validate" />
            </div>
            <div className="input-field col s6 m6">
              <input placeholder="Service Symbol"  type="text" className="validate" />
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="input-field col s6 m6">
              <input placeholder="Start Date" type="text" className="validate" />
            </div>
            <div className="input-field col s6 m6">
              <input placeholder="End Date"  type="text" className="validate" />
            </div>
          </div>

          <div className="moveFromBottomFade row">
            <div className="col s12 m12">
              Number of Token to issue:
              <div className="input-field inline">
                <input type="text" className="validate" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12 m12">
              <div className="box create-tokens-btn" onClick={() => {this.fetchTokensFunc()}}>
                <div className="center aligh">Create Service Tokens</div>
              </div>
            </div>
          </div>

        </form>
    )
  }
}

export default Form;
