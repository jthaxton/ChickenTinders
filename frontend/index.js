import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import {HashRouter} from 'react-router-dom';
import Routes from './routes';
import {Router} from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Root = ({store}) => {
    return (
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    );
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const token = {token: $('meta[name="csrf-token"]').attr('content')}
    const user = window.currentUser;
    const store = configureStore({auth: {token: token, user}})
    delete window.currentUser;
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
