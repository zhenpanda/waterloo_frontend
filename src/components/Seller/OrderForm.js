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
        console.log(this.props.tokens);
    }

    createOrder() {
        let takerToken = "0x48bacb9266a570d521063ef5dd96e61686dbe788"; //ethereum
        // let makerToken = $('#maker-token').val();
        let makerToken = "0xeef74ac710a91d96b302c6664623917eefe9608d";
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

        $(".seller-form").css({ opacity: 0.1337 });
        this.props.pushOrder(formValues);
    }

    createSelectItems() {
        let items = [];
        for (let i = 0; i <= this.props.maxValue; i++) {
            items.push(<option key={i} value={i}>{i}</option>);
            //here I will be creating my options dynamically based on
            //what props are currently passed to the parent component
        }
        return items;
    }

    onDropdownSelected(e) {
        console.log("THE VAL", e.target.value);
        //here you will see the current selected value of the select input
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
                Number of Service Tokens for sale:
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
  return {
    web3: state.waterloo.web3,
    tokens: state.waterloo.tokens
  }
}

export default connect(mapStateToProps, actions)(OrderForm);
