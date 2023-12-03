import {
  ChangeEvent,
  ComponentPropsWithRef,
  FC,
  MouseEvent,
  useState,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './Autocomplete.scss';

interface IAutocomplete extends ComponentPropsWithRef<'input'> {
  register?: UseFormRegisterReturn;
  data: string[];
  label: string;
}

export const Autocomplete: FC<IAutocomplete> = ({
  data,
  label,
  register,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [showData, setShowData] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) {
      const sortData = data.filter((el) =>
        el.toLowerCase().includes(val.toLowerCase())
      );
      setValue(val);
      setShowData(sortData);
      setIsVisible(true);
    } else {
      setValue('');
      setShowData([]);
      setIsVisible(false);
    }
  };

  const onClickHandler = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLabelElement;
    setValue(target.htmlFor);
    setIsVisible(false);
  };

  return (
    <div className="autocomplete group">
      <input
        type="text"
        id="autompl"
        {...register}
        {...rest}
        value={value}
        onChange={onChangeHandler}
      />
      <label htmlFor="autompl">{label}</label>
      {isVisible ? (
        <ul className="countries-list" onClick={onClickHandler}>
          {showData.length ? (
            showData.map((el) => (
              <li key={el}>
                <label htmlFor={el}>{el}</label>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
