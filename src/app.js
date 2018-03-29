import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    // Provider provide store to our components
    <Provider store={store}>
        {/*Root component which manage routing between all components*/}
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));