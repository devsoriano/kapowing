import axios from 'axios';

import AirportsActionTypes from './airports.types';

const { GET_AIRPORTS } = AirportsActionTypes;

export const getAirports = () => async (dispatch: any) => {
  const res = await axios.get(
    'https://evamed-rest-api.herokuapp.com/api-projects/airports/',
  );
  dispatch({
    type: GET_AIRPORTS,
    payload: res.data,
  });
};
