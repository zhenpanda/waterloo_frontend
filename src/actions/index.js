import axios from 'axios';
import { FETCH_TEST,TOKENS_TEST,PUSH_TOKEN,FETCH_WEB3,PUSH_ORDER,FETCH_BALANCE,FETCH_EXCHANGE,FILL_ORDER } from './types';

const TEST_API = 'https://jsonplaceholder.typicode.com/posts/1';
// test API endpoints

const TOKENS_STASH_API = 'http://localhost:8000/tokens';
const CREATE_TOKEN_API = 'http://localhost:8000/create';
const CREATE_ORDER_API = 'http://localhost:8000/createOrder';
const FETCH_EXCHANGE_API = 'http://localhost:8000/exchange';
const FETCH_BALANCE_API = 'http://localhost:8000/getBalance';
// const FILL_ORDER_API = 'http://localhost:8000/fillOrder';

// const TOKENS_STASH_API_LOCAL = '172.31.208.27';
/*
const TOKENS_STASH_API = 'http://172.31.208.27:8000/tokens';
const CREATE_TOKEN_API = 'http://172.31.208.27:8000/create';
const CREATE_ORDER_API = 'http://172.31.208.27:8000/createOrder';
const FETCH_EXCHANGE_API = 'http://172.31.208.27:8000/exchange';
const FETCH_BALANCE_API = 'http://172.31.208.27:8000/getBalance';
const FILL_ORDER_API = 'http://172.31.208.27:8000/fillOrder';
*/

export function fetchBalance(address) {
  return function(dispatch) {
    console.log("fetching balance...");
    axios.post(`${FETCH_BALANCE_API}`, {"address": address})
    .then(response => {
      // debugger;
      // console.log(response.data);
      dispatch({
        type: FETCH_BALANCE,
        payload: response.data
      });
    })
    .catch(response => {
      // debugger;
      console.log("there was an issue....fetching the balance");
    });
  }
};

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
        axios.get(`${TOKENS_STASH_API}`)
        .then(response => {
          // debugger;
          console.log(response.data);
          dispatch({
            type: TOKENS_TEST,
            payload: response.data
          });
        })
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

export function fetchExchange() {
  return function(dispatch) {
    console.log("sending fetchExchange calls...");
    axios.get(`${FETCH_EXCHANGE_API}`)
    .then(response => {
      // debugger;
      // console.log(response.data);
      dispatch({
        type: FETCH_EXCHANGE,
        payload: response.data
      });
    })
    .catch(response => {
      // debugger;
      console.log("there was an issue....fetch");
    });
  }
}

// let formAPI = {
// 	"form" :    {
//         "maker": "0x6ecbe1db9ef729cbe972c83fb886247691fb6beb",
//         "taker": "0x0000000000000000000000000000000000000000",
//         "takerTokenAddress": "0x48bacb9266a570d521063ef5dd96e61686dbe788",
//         "makerTokenAddress": "0xf3d9db934b9c81c0f59c46ba3cff1bd66d750136",
//         "makerTokenAmount": "5",
//         "takerTokenAmount": "5",
//         "takerFee": "0",
//         "makerFee": "0",
//         "exchangeContractAddress": "0xb69e673309512a9d726f87304c6984054f87a93b",
//         "feeRecipient": "0x6ecbe1db9ef729cbe972c83fb886247691fb6beb",
//         "expirationUnixTimestampSec": "1508066747100000",
//         "salt": "49313036800608903108167328487126256697694669233317329480386484374535104596013",
//         "ecSignature": {
//             "v": 28,
//             "r": "0xd5e415967e5ded17ab3a227195ff5c031892103a41f2073d5bc5734eae6bbbc1",
//             "s": "0x78230861ae09c74525168a71ef2758e96eea67faf91399623f83ad5d13ac153d"
//         }
//     },
//     "address": "0x5409ed021d9299bf6814279a6a1411a7e866a631",
//     "number": 5
// };

export function fillOrder(el) {
  return function(dispatch) {
    console.log("sending fillOrder order");
    if(el) {
      dispatch({
        type: FILL_ORDER,
        payload: el
      });
      // debugger;
      // axios.post(`${FILL_ORDER_API}`, formAPI)
      // .then(response => {
      //   console.log(response.data);
      //   // debugger;
      //   dispatch({
      //     type: FILL_ORDER,
      //     payload: el
      //   });
      // })
      // .catch(response => {
      //   // debugger;
      //   console.log("there was an issue creating the order");
      // });

  }
    // console.log(order);
  }
}
