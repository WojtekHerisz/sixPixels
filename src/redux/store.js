import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object"
    ? window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = () => createStore(rootReducer, enhancer);

const wrapper = createWrapper(makeStore);

export default wrapper;
