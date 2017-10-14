import React, { Component } from 'react';
import {connect} from 'react-redux';

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    const web3Context = context.web3
    console.log(context.web3);
  }

  render() {
    return (
      <div>
        <h1>Test Page</h1>
        <div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Test);
