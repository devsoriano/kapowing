import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import CartItem from '../CardItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import type { ICartDropdown } from './interface';
import { CardItems, Container, Empty } from './styles';

const CartDropdown = ({ cartItems, history, dispatch }: ICartDropdown) => {
  const { t } = useTranslation();
  const T_ROOT = 'cardCart.cardDropDown';
  return (
    <Container>
      <CardItems>
        {cartItems.length ? (
          cartItems.map((cartItem: any) => (
            <CartItem
              key={`${cartItem.id}-${cartItem.passengers}`}
              item={cartItem}
            />
          ))
        ) : (
          <Empty>{t(`${T_ROOT}.emptyMessage`)}</Empty>
        )}
      </CardItems>
      {cartItems.length > 0 && (
        <button
          className="button"
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          {t(`${T_ROOT}.button`)}
        </button>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
