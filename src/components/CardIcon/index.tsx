import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import ShoppingBag from '../../assets/img/bag.jpg';
import { Principal, Reservation, Img, ItemCount, Title } from './styles';
import type { ICardIcon } from './interface';

const CartIcon = ({ toggleCartHidden, itemCount }: ICardIcon) => {
  const { t } = useTranslation();

  const T_ROOT = 'cardCart';

  return (
    <Reservation onClick={toggleCartHidden}>
      <Title>{t(`${T_ROOT}.myReservation`)}</Title>
      <Principal>
        <Img src={ShoppingBag} alt="ticket" />
        <ItemCount>{itemCount}</ItemCount>
      </Principal>
    </Reservation>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
