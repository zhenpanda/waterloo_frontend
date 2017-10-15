import axios from 'axios';
import { FETCH_TEST,TOKENS_TEST,PUSH_TOKEN,FETCH_WEB3, PUSH_ORDER } from './types';

const TEST_API = 'https://jsonplaceholder.typicode.com/posts/1';
// test API endpoints
const TOKENS_STASH_API = 'http://localhost:8000/tokens';
const CREATE_TOKEN_API = 'http://localhost:8000/create';
const CREATE_ORDER_API = 'http://localhost:8000/createOrder';

export function fetchTest() {
  return function(dispatch) {
    console.log("sending test calls...");
    axios.get(`${TEST_API}`)
    .then(response => {
      // debugger;
      console.log(response.data);
      dispatch({
        type: FETCH_TEST,
        payload: response.data
      });
    })
    .catch(response => {
      // debugger;
      console.log("there was an issue....fetch");
    });
  }
};

export function changeWeb3(web3Info) {
  return function(dispatch) {
    dispatch({
      type: FETCH_WEB3,
      payload: web3Info
    });
  }
}

export function fetchTokens() {
  return function(dispatch) {
    console.log("sending fetchTokens calls...");
    axios.get(`${TOKENS_STASH_API}`)
    .then(response => {
      // debugger;
      console.log(response.data);
      dispatch({
        type: TOKENS_TEST,
        payload: response.data
      });
    })
    .catch(response => {
      // debugger;
      console.log("there was an issue....fetch");
    });
  }
};

export function pushToken(token) {
  return function(dispatch) {
    // debugger;
    if (token) {
      console.log("sending pushStudent calls...");
      axios.post(`${CREATE_TOKEN_API}`, token)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: PUSH_TOKEN,
          payload: response.data
        })
      }).then(res => {
        console.log("recalling fetch on all students");
        axios.get(`${TOKENS_STASH_API}`)
        .then(response => {
          // debugger;
          console.log(response.data);
          dispatch({
            type: TOKENS_TEST,
            payload: response.data
          });
        })
        .catch(response => {
          // debugger;
          console.log("there was an issue....fetch");
        });
      })
      .catch(response => {
        // debugger;
        console.log("there was an issue....pushStudent");
      });
    };
    //
  }
}

export function pushOrder(order) {
  return function(dispatch) {
    console.log("sending order");
    if(order){

      axios.post(`${CREATE_ORDER_API}`, order)
      .then(response => {
        // debugger;
        console.log(response.data);
        dispatch({
          type: PUSH_ORDER,
          payload: response.data
        });
      })
      .catch(response => {
        // debugger;
        console.log("there was an issue creating the order");
      });
            
  }
    console.log(order);
  }
}
