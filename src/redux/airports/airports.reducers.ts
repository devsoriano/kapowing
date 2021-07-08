import AirportsActionTypes from './airports.types';

const { GET_AIRPORTS } = AirportsActionTypes;

const initialState = {
  airports: [],
  airport: [],
};

export const airportReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_AIRPORTS:
      return {
        ...state,
        airports: action.payload,
      };
    default:
      return state;
  }
};
