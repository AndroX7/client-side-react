import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  access_token: '',
  error: ''
}
export const LOGIN_USER = (userData) => {
  return (dispatch) => {
    function login(userData) {
      axios({
        url: 'http://localhost:3007/login',
        method: 'POST',
        data: {
          email: userData.email,
          password: userData.password
        }
      })
      .then(({ data }) => {
        dispatch(SET_ACCESS_TOKEN(data));
      })
      .catch(err => {
        dispatch(SET_ERROR(err));
      })
    }
  }
}

export const SET_ACCESS_TOKEN = (data) => {
  return { type: 'SET_ACCESS_TOKEN', payload: data}
}

export const SET_ERROR = (data) => {
  return { type: 'SET_ERROR', payload: data}
}

function reducer(state = initialState, action) {
  if(action.type === 'SET_ACCESS_TOKEN') {
    return { access_token: action.payload }
  }
  if(action.type === 'SET_ERROR') {
    return { error: action.payload }
  }
  return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;
