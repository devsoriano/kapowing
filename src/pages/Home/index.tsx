import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SearchFlight } from './components/SearchFlight';
import FlightInfo from './components/FlightInfo';
import { getFlightsInfo } from '../../redux/flightsInfo/flightsInfo.actions';
import { defaultValues } from './constants';
import { CardsContainer, ErrorMessage } from './styles';
import type { FormValues } from './interface';
import type { IFlightInfo } from './components/FlightInfo/interface';

const Home = () => {
  const dispatch = useDispatch();

  const [passengers, setPassengers] = useState('');

  let flightsInfo = useSelector(
    (state: any) => state.flightsInfoReducer.flightsInfo,
  );

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setPassengers(data.passengers);
    dispatch(getFlightsInfo(data));
  };

  if (!passengers) {
    flightsInfo = [];
  }

  return (
    <>
      <SearchFlight
        {...{ control, errors, handleSubmit, onSubmit, register }}
      />

      <CardsContainer>
        {flightsInfo === null ? (
          <ErrorMessage>
            Disculpe las molestias, no encontramos coincidencias de vuelos con
            los datos proporcionados
          </ErrorMessage>
        ) : (
          flightsInfo.map((flightsInfo: IFlightInfo) => {
            const {
              arrivalAirportId,
              cost,
              departureAirportId,
              departureDate,
              departureTime,
              img,
              id,
            } = flightsInfo;
            return (
              <FlightInfo
                {...{
                  arrivalAirportId,
                  cost,
                  departureAirportId,
                  departureDate,
                  departureTime,
                  img,
                  id,
                  passengers,
                }}
                key={id}
              />
            );
          })
        )}
      </CardsContainer>
    </>
  );
};

export default Home;
