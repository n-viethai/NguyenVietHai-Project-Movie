import { applyMiddleware, combineReducers, createStore } from "redux";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { HeaderReducer } from "./reducers/HeaderReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CarouselReducer,
  HeaderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
