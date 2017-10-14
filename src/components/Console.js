import React, { Component } from 'react';
// import {connect} from 'react-redux';

class Console extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount() {
  // }

  render() {
    return (
      <div>
        <h1>Console Page</h1>
        <div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Console);
