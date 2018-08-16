import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk)

export function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
    )
  );
}
