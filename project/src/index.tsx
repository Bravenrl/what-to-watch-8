import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'react-router-dom';
import App from './components/app/app';
import { checkAuthStatus } from './store/api-actions';
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browser-history';

store.dispatch(checkAuthStatus());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
