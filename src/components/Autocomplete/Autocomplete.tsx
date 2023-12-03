import { ChangeEvent, MouseEvent, forwardRef, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './Autocomplete.scss';

interface IAutocomplete {
  register?: UseFormRegisterReturn;
  data: string[];
  label: string;
  // ref: MutableRefObject<HTMLInputElement>|null;
}

export const AutocompleteWhithRef = forwardRef<HTMLInputElement, IAutocomplete>(
  ({ data, label, register, ...rest }, ref) => {
    const [value, setValue] = useState('');
    const [showData, setShowData] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const refDiv = useRef<HTMLDivElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val) {
        const sortData = data.filter((el) =>
          el.toLowerCase().includes(val.toLowerCase())
        );
        setValue(val);
        setShowData(sortData);
        sortData.length ? setIsVisible(true) : setIsVisible(false);
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
      if (refDiv.current) {
        const input = refDiv.current
          .childNodes[0] as unknown as HTMLInputElement;
        setTimeout(() => {
          input.focus();
          input.blur();
        }, 30);
      }
    };

    return (
      <div className="autocomplete group" ref={refDiv}>
        <input
          type="text"
          id="autompl"
          {...register}
          {...rest}
          ref={ref}
          value={value}
          onChange={onChangeHandler}
          required
          autoComplete="f"
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
  }
);
