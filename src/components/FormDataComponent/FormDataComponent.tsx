import { FC } from 'react';
import { IFormData } from '../../types/formDataTypes';
import './FormDataComponent.scss';

export const FormDataComponent: FC<{ data: IFormData; isFirst: boolean }> = ({
  data,
  isFirst,
}) => {
  if (
    data.name &&
    data.age &&
    data.email &&
    data.pasword1 &&
    data.gender &&
    data.country &&
    data.picture
  )
    return (
      <>
        <div className={isFirst ? 'new' : ''}>
          <p>
            <span>Name: </span>
            {data.name}
          </p>
          <p>
            <span>Age: </span>
            {data.age}
          </p>
          <p>
            <span>Email: </span>
            {data.email}
          </p>
          <p>
            <span>Password: </span>
            {data.pasword1}
          </p>
          <p>
            <span>Gender: </span>
            {data.gender}
          </p>
          <p>
            <span>Country: </span>
            {typeof data.country === 'string' ? data.country : ''}
          </p>
          <img src={data.picture} alt="Your Picture" className="form-picture" />
        </div>
      </>
    );

  return <>This form have incorrect data!</>;
};
