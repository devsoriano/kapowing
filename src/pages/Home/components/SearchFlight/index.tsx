import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { SearchContainer } from './styles';
import type { ISearchFlight } from './interface';
import { MuiAirportLocation } from '../../../../components/MuiAirportLocation/index';
import { getAirports } from '../../../../redux/airports/airports.actions';
import 'react-datepicker/dist/react-datepicker.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const SearchFlight = ({
  handleSubmit,
  errors,
  onSubmit,
  control,
  register,
}: ISearchFlight) => {
  const { t } = useTranslation();

  const T_ROOT = 'search';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirports());
  }, [dispatch]);

  const airports = useSelector((state: any) => state.airportReducer);

  return (
    <SearchContainer>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="container">
            <section>
              <label>{t(`${T_ROOT}.departureAirport`)}</label>
              <MuiAirportLocation
                control={control}
                {...{ errors }}
                name="departureAirport"
                {...airports}
              />
              {errors.departureAirport &&
                errors.departureAirport.type === 'required' && (
                  <div className="Error">{t(`${T_ROOT}.error.airport`)}</div>
                )}
            </section>
            <section>
              <label>{t(`${T_ROOT}.arrivalAirport`)}</label>
              <MuiAirportLocation
                control={control}
                name="arrivalAirport"
                {...airports}
              />
              {errors.arrivalAirport &&
                errors.arrivalAirport.type === 'required' && (
                  <div className="Error">{t(`${T_ROOT}.error.airport`)}</div>
                )}
            </section>
            <section>
              <label>{t(`${T_ROOT}.departureDate`)}</label>
              <Controller
                control={control}
                name="departureDate"
                render={({ field }) => {
                  return (
                    <ReactDatePicker
                      {...field}
                      className="input"
                      placeholderText="Select date"
                      selected={field.value}
                    />
                  );
                }}
                rules={{
                  required: true,
                  minLength: 6,
                }}
              />
              {errors.departureDate &&
                errors.departureDate.type === 'required' && (
                  <div className="Error">
                    {t(`${T_ROOT}.error.departureDate`)}
                  </div>
                )}
            </section>
            <section>
              <label>{t(`${T_ROOT}.passengers`)}</label>
              <input
                {...register('passengers', { required: true, maxLength: 1 })}
                className="input"
                type="number"
              />
              {errors.passengers && errors.passengers.type === 'required' && (
                <div className="Error">
                  {t(`${T_ROOT}.error.passengers.required`)}
                </div>
              )}
              {errors.passengers && errors.passengers.type === 'maxLength' && (
                <div className="Error">
                  {t(`${T_ROOT}.error.passengers.length`)}
                </div>
              )}
            </section>
            <section>
              <button className="button">
                {t(`${T_ROOT}.searchForFlights`)}
              </button>
            </section>
          </div>
        </form>
      </ThemeProvider>
    </SearchContainer>
  );
};
