import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component {
  render() {
    return (
        <form>
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
        </form>
    )
  }
}

export default Form;
