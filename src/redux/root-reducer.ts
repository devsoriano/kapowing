import { combineReducers } from 'redux';
import { airportReducer } from './airports/airports.reducers';
import { flightsInfoReducer } from './flightsInfo/flightsInfo.reducers';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  airportReducer,
  flightsInfoReducer,
  cart: cartReducer,
});
