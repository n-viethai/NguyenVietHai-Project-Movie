import { applyMiddleware, combineReducers, createStore } from "redux";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { HeaderReducer } from "./reducers/HeaderReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CarouselReducer,
  HeaderReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
