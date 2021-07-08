import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import type { IFlightInfo } from './interface';
import {
  ArrivalPlace,
  CardContainer,
  CityImage,
  DateAndHour,
  DeparturePlace,
  Info,
  Price,
} from './styles';
import { addItem } from '../../../../redux/cart/cart.actions';
import { moneyFormat } from '../../../../utils/utils';
import { getAirports } from '../../../../redux/airports/airports.actions';
import type { IAirport } from '../../../../components/MuiAirportLocation/interface';

const FlightInfo = ({
  arrivalAirportId,
  cost,
  departureAirportId,
  departureDate,
  departureTime,
  img,
  passengers,
  id,
  addItem,
}: IFlightInfo) => {
  const dispatch = useDispatch();

  const airports = useSelector((state: any) => state.airportReducer.airports);

  let arrivalCity = '';
  let arrivalCountry = '';
  let departureCity = '';
  let departureCountry = '';
  let totalCost = 0;

  airports.map((airport: IAirport) => {
    if (arrivalAirportId === airport.id) {
      arrivalCity = airport.city;
      arrivalCountry = airport.country;
    }
    if (departureAirportId === airport.id) {
      departureCity = airport.city;
      departureCountry = airport.country;
    }

    totalCost = parseInt(cost) * parseInt(passengers);
  });

  const item = {
    arrivalCity,
    arrivalCountry,
    totalCost,
    departureCity,
    departureCountry,
    departureDate,
    departureTime,
    img,
    id,
    passengers,
  };

  useEffect(() => {
    dispatch(getAirports());
  }, [dispatch]);

  return (
    <CardContainer>
      <CityImage src={img} alt="city" />
      <Info>
        <ArrivalPlace>{`${departureCity} - ${departureCountry} /`}</ArrivalPlace>
        <DeparturePlace>{`${arrivalCity} - ${arrivalCountry}`}</DeparturePlace>
        <DateAndHour>{`Para viajar ${departureDate} a las ${departureTime}`}</DateAndHour>
        <h3>
          {`A tan sólo`}{' '}
          <Price>{`${moneyFormat.format(parseInt(cost))} MXN`}</Price> por
          persona,
        </h3>
        <h3>
          {`Por ${passengers}  pasajeros`}{' '}
          <Price>{`${moneyFormat.format(totalCost)} MXN`}</Price>
        </h3>
        <button className="button" onClick={() => addItem(item)}>
          Reservar
        </button>
      </Info>
    </CardContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(FlightInfo);
