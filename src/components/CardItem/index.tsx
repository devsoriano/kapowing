import React from 'react';
import { moneyFormat } from '../../utils/utils';
import {
  Container,
  Img,
  Info,
  InfoDate,
  InfoPlace,
  ItemDetails,
  Price,
} from './styles';

const CartItem = ({
  item: {
    img,
    departureCity,
    departureCountry,
    departureDate,
    departureTime,
    totalCost,
    arrivalCity,
    arrivalCountry,
    quantity,
    passengers,
  },
}: any) => (
  <Container>
    <ItemDetails>
      <Img src={img} alt="mini" />

      <InfoPlace>
        De {departureCity} / {departureCountry}
      </InfoPlace>
      <InfoPlace>
        con destino a {arrivalCity} / {arrivalCountry}
      </InfoPlace>
      <InfoDate>
        y fecha {departureDate} las {departureTime}
      </InfoDate>
      <Price>
        {quantity} x {`${moneyFormat.format(parseInt(totalCost))} MXN`}
      </Price>
      <Info>con {passengers} pasajeros</Info>
    </ItemDetails>
  </Container>
);

export default CartItem;
