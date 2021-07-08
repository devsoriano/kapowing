import { addItem } from '../../../../redux/cart/cart.actions';
export interface IFlightInfo {
  arrivalAirportId: string;
  cost: string;
  departureAirportId: string;
  departureDate: string;
  departureTime: string;
  id: string;
  img: string;
  passengers: string;
  addItem: any;
}
