import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { clearCart } from '../../redux/cart/cart.actions';
import { moneyFormat } from '../../utils/utils';
import type { ICheckout } from './interface';
import { CheckoutContainer, DivCheckout, Title, Total } from './styles';
import CheckoutItem from './components/CheckoutItem';

const Checkout = ({ cartItems, clearCart, total }: ICheckout) => {
  return (
    <CheckoutContainer>
      {cartItems.length > 0 && (
        <>
          <Title>Verifica tus reservaciones:</Title>
          {cartItems.map(
            ({
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
            }: any) => (
              <CheckoutItem
                key={`${id}`}
                {...{
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
                }}
              />
            ),
          )}
          <DivCheckout>
            <Total>Total: {moneyFormat.format(total)} MXN</Total>
            <div className="container-buttons">
              <div className="container-button">
                <button className="button" onClick={() => clearCart()}>
                  Eliminar reservaciones
                </button>
              </div>
              <div className="container-button">
                <Link className="button href-purple" to="/book-your-flights">
                  Reserva tus vuelos
                </Link>
              </div>
            </div>
          </DivCheckout>
        </>
      )}
    </CheckoutContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
