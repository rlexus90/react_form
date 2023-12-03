import { ComponentPropsWithRef, FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IAutocomplete extends ComponentPropsWithRef<'input'> {
  register?: UseFormRegisterReturn;
  data: string[];
}

export const Autocomplete: FC<IAutocomplete> = ({
  // data,
  register,
  ...rest
}) => {
  return (
    <div className="autocomplete">
      <input type="text" {...register} {...rest} />
      <ul className="countriesList"></ul>
    </div>
  );
};
