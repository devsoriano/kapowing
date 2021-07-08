import { Control } from 'react-hook-form';

export interface IAirport {
  id: string;
  airport: string;
  countryCode: string;
  city: string;
  country: string;
}

export interface IMuiAirportLocation {
  control: Control;
  name: string;
  airports: IAirport[];
}
