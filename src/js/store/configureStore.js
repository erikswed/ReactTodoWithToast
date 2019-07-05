import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import { forbiddenWordsMiddleware } from "../middleware";
import  ToastsReducer from '../reducers/ToastsReducer';
import  RootReducer from '../reducers/RootReducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
     toastsReducer: ToastsReducer,
     rootReducer: RootReducer
  };

  const reduce = combineReducers({
    ...reducers,
  });

const store = createStore(
    reduce,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;