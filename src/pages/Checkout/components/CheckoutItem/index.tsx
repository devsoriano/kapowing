import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../../../redux/cart/cart.actions';
import { moneyFormat } from '../../../../utils/utils';
import {
  ArrivalPlace,
  CardContainer,
  CityImage,
  DateAndHour,
  DeparturePlace,
  Price,
  Info,
} from '../../../Home/components/FlightInfo/styles';

const CheckoutItem = ({
  arrivalCity,
  arrivalCountry,
  departureCity,
  departureCountry,
  departureDate,
  departureTime,
  img,
  id,
  passengers,
  totalCost,
  clearItem,
  quantity,
}: any) => {
  const item = {
    arrivalCity,
    arrivalCountry,
    departureCity,
    departureCountry,
    departureDate,
    departureTime,
    id,
    img,
    passengers,
    totalCost,
    quantity,
  };
  return (
    <CardContainer>
      <CityImage src={img} alt="city" />
      <Info>
        <ArrivalPlace>{`${departureCity} - ${departureCountry} /`}</ArrivalPlace>
        <DeparturePlace>{`${arrivalCity} - ${arrivalCountry}`}</DeparturePlace>
        <DateAndHour>{`Para viajar ${departureDate} a las ${departureTime}`}</DateAndHour>
        <h3>
          <Price>{`${moneyFormat.format(
            totalCost / parseInt(passengers),
          )} MXN`}</Price>
          por persona,
        </h3>{' '}
        <h3>
          {`X ${passengers} pasajeros`}
          <Price>{`${moneyFormat.format(totalCost)} MXN`}</Price>,
        </h3>
        {quantity > 1 && (
          <h3>
            {`X ${quantity} veces este paquete:`}
            <Price>{` ${moneyFormat.format(totalCost * quantity)} MXN`}</Price>
          </h3>
        )}
        <button className="button" onClick={() => clearItem(item)}>
          Cancelar reservación
        </button>
      </Info>
    </CardContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: any) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
