import React from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash/fp';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Controller } from 'react-hook-form';
import type { IAirport, IMuiAirportLocation } from './interface';

export const MuiAirportLocation = ({
  control,
  name,
  airports,
}: IMuiAirportLocation) => {
  const { t } = useTranslation();

  const T_ROOT = 'search';

  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={airports}
          getOptionLabel={(option) => option.airport}
          renderOption={(option) => (
            <span>
              <div>
                {countryToFlag(option.countryCode)}
                {option.airport}
              </div>
              <div>
                {option.country} - {option.city}
              </div>
            </span>
          )}
          getOptionSelected={(option: IAirport, value: IAirport) =>
            _.isEqual(option, value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={t(`${T_ROOT}.selectAirport`)}
              variant="outlined"
            />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      name={name}
      control={control}
      rules={{
        required: true,
        minLength: 6,
      }}
    />
  );
};

const countryToFlag = (isoCode: string) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397),
        )
    : isoCode;
};
