import React from 'react';
import {
  ArrivalPlace,
  CardContainer,
  DateAndHour,
  DeparturePlace,
  Info,
  Price,
} from '../../../Home/components/FlightInfo/styles';
import { moneyFormat } from '../../../../utils/utils';

export const FinalData = ({
  arrivalCity,
  arrivalCountry,
  departureCity,
  departureCountry,
  departureDate,
  departureTime,
  passengers,
  totalCost,
  quantity,
}: any) => {
  return (
    <CardContainer>
      <Info>
        <ArrivalPlace>{`${departureCity} - ${departureCountry} /`}</ArrivalPlace>
        <DeparturePlace>{`${arrivalCity} - ${arrivalCountry}`}</DeparturePlace>
        <DateAndHour>{`Con fecha ${departureDate}, a las ${departureTime}`}</DateAndHour>
        <h3>
          <Price>{`${moneyFormat.format(
            totalCost / parseInt(passengers),
          )} MXN`}</Price>
        </h3>
        <h3>
          {`X ${passengers} pasajeros`}{' '}
          <Price>{`${moneyFormat.format(totalCost)} MXN`}</Price>
        </h3>
        {quantity > 1 && (
          <h3>
            {`X ${quantity} veces este paquete:`}
            <Price>{` ${moneyFormat.format(totalCost * quantity)} MXN`}</Price>
          </h3>
        )}
      </Info>
    </CardContainer>
  );
};
