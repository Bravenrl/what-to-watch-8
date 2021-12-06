import { configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { AuthStatus } from './const';
import { createApi } from './services/api';
import { RootReducer } from './store/root-reducer';
import { requireAuthStatus } from './store/user-process/slice-user-process';

const api = createApi(() =>
  store.dispatch(requireAuthStatus(AuthStatus.NoAuth)));

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: api } }),
});

type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
