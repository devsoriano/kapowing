import FlightsInfoTypes from './flightsInfo.types';

const { GET_FLIGHTS_INFO } = FlightsInfoTypes;

const initialState = {
  flightsInfo: [],
};

export const flightsInfoReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_FLIGHTS_INFO:
      return {
        ...state,
        flightsInfo: action.payload,
      };
    default:
      return state;
  }
};
