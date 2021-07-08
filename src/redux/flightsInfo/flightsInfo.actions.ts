import axios from 'axios';

import FlightsInfoTypes from './flightsInfo.types';

const { GET_FLIGHTS_INFO } = FlightsInfoTypes;

export const getFlightsInfo = (data: any) => async (dispatch: any) => {
  const res = await axios.get(
    'https://evamed-rest-api.herokuapp.com/api-projects/flights-info/',
  );

  //Filter simulating backend
  let filter = res.data.filter(
    (flight: any) =>
      flight.arrivalAirportId === data.arrivalAirport.id &&
      flight.departureAirportId === data.departureAirport.id &&
      flight.departureDate === data.departureDate.toLocaleDateString(),
  );

  if (filter.length === 0) {
    filter = null;
  }

  dispatch({
    type: GET_FLIGHTS_INFO,
    payload: filter,
  });
};
