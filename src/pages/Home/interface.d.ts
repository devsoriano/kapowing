import { NestedValue } from 'react-hook-form';

export type FormValues = {
  arrivalAirport: NestedValue<{
    id: number;
    country_code: string;
    country: string;
    city: string;
    airport: string;
  }>;
  departureAirport: NestedValue<{
    id: number;
    country_code: string;
    country: string;
    city: string;
    airport: string;
  }>;
  departureDate: Date;
  passengers: string;
};
