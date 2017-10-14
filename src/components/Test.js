import React, { Component } from 'react';
import {connect} from 'react-redux';

class Test extends Component {
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
