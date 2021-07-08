import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { SearchContainer } from '../../../Home/components/SearchFlight/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const AddPersonalData = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  disabled,
  numberInputs,
}: any) => {
  return (
    <SearchContainer>
      <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="container">
            <section>
              <label>Nombres</label>
              <input
                {...register('name', { maxLength: 20 })}
                className="input"
              />
              {errors.name && errors.name.type === 'maxLength' && (
                <div className="Error">No más de 20 caracteres</div>
              )}
            </section>
            <section>
              <label>Apellidos</label>
              <input
                {...register('surname', { maxLength: 30 })}
                className="input"
              />
              {errors.surname && errors.surname.type === 'maxLength' && (
                <div className="Error">No más de 30 caracteres</div>
              )}
            </section>

            <section>
              <label>Dirección</label>
              <input
                {...register('address', { maxLength: 80 })}
                className="input"
              />
              {errors.address && errors.address.type === 'maxLength' && (
                <div className="Error">No más 80 caracteres</div>
              )}
            </section>

            <section>
              <label>Email</label>
              <input
                {...register('email', {
                  required: 'required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'No es un formato de email válido',
                  },
                })}
                className="email"
              />
              {errors.email && (
                <div className="Error">{errors.email.message}</div>
              )}
            </section>
            <section>
              <button
                className={disabled === numberInputs ? 'button' : 'button grey'}
                disabled={disabled === numberInputs ? false : true}
              >
                Reservar
              </button>
            </section>
          </div>
        </form>
      </ThemeProvider>
    </SearchContainer>
  );
};
