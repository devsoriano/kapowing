import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { clearCart } from '../../redux/cart/cart.actions';
import { moneyFormat } from '../../utils/utils';
import type { FormValues, IBookYourFlights } from './interface';
import { defaultValues, numberInputs } from './constants';
import { ReserveContainer, Space, Title } from './styles';
import { AddPersonalData } from './components/AddPersonalData';
import { FinalData } from './components/FinalData';
import { Total } from '../Checkout/styles';

const BookYourFlights = ({ cartItems, clearCart }: IBookYourFlights) => {
  const [finalData, setFinalData] = useState({});
  const [finalCartItems, setFinalCardItems] = useState([]);
  const [isReserved, setIsReserved] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { dirtyFields, errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitErrorHandler<FormValues> = (data) => {
    setFinalCardItems(cartItems);
    setFinalData(data);
    setIsReserved(true);
    clearCart();
  };

  const disabled = Object.keys(dirtyFields).length;
  const { name, surname, address, email }: any = finalData;

  console.log();

  return (
    <>
      {cartItems.length > 0 && !isReserved ? (
        <AddPersonalData
          {...{
            handleSubmit,
            onSubmit,
            register,
            errors,
            disabled,
            numberInputs,
          }}
        />
      ) : (
        Object.keys(finalData).length > 0 && (
          <ReserveContainer>
            <div className="form">
              <Title>¡Gracias por tu reserva!</Title>
              <Space>
                {name} {surname} con el correo {email} y dirección {address} tus
                reservaciones han sido realizadas de manera exitosa:
              </Space>
              {finalCartItems.map(
                ({
                  arrivalCity,
                  arrivalCountry,
                  departureCity,
                  departureCountry,
                  departureDate,
                  departureTime,
                  passengers,
                  totalCost,
                  id,
                  quantity,
                }: any) => (
                  <FinalData
                    {...{
                      arrivalCity,
                      arrivalCountry,
                      departureCity,
                      departureCountry,
                      departureDate,
                      departureTime,
                      passengers,
                      totalCost,
                      quantity,
                    }}
                    key={id}
                  />
                ),
              )}
            </div>
          </ReserveContainer>
        )
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookYourFlights);
