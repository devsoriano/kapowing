import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartDropdown from '../CardDropdown';
import CardIcon from '../CardIcon';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import logo from '../../assets/img/logo.jpeg';
import type { IHeader } from './interface';
import './styles.scss';

const Header = ({ hidden }: IHeader) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
    <div className="options">
      <CardIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </header>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
