import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';

import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

// CSS
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/cryptocoins-icons/webfont/cryptocoins.css';
import './assets/css/main.css';
import './assets/css/app.css';
import 'react-transitions/dist/animations.css';

// created components
import App from './components/App';
import Test from './components/Test';
// import TestLink from './components/Test/TestLink';
// import Console from './components/Console/Console';

// import { Web3Provider } from 'react-web3';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>

        <Switch>

          <Route exact path='/' component={ App }/>
          <Route exact path='/test' component={ Test }/>

        </Switch>

      </Router>
    </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
