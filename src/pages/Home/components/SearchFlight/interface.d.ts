import {
  Control,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import type { FormValues } from '../../interface';

export interface ISearchFlight {
  control: Control<FormValues>;
  errors: DeepMap<FormValues, FieldError>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  register: UseFormRegister<FormValues>;
}
