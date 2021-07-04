import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, useMiddleware } from 'redux';
import thunk from 'react-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, useMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.querySelector('#root')
)