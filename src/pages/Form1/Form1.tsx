import { FC } from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { IFormData } from '../../types/formDataTypes';
import './Form.scss';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { convertImage } from '../../utils/convertImage';
import { AutocompleteWhithRef } from '../../components/Autocomplete/Autocomplete';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { setupSchema } from '../../utils/setupSchema';

export const Form1: FC = () => {
  const { countries } = useAppSelector((store) => store.countrySlice);
  const navigate = useNavigate();

  const schema = setupSchema(countries);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema) as unknown as Resolver<IFormData, unknown>,
    mode: 'all',
  });
  const { setFirstFormData } = useActions();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    if (!data.picture.length) return;
    const file = data.picture[0] as unknown as File;
    data.picture = await convertImage(file);
    setFirstFormData(data);
    reset();
    navigate('/main');
  };

  const { ref } = register('country');

  return (
    <>
      <main>
        <div className="wrapper">
          <h1>This is form create with React Hook Form </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="group">
              <input type="text" id="Name" required {...register('name')} />
              <label htmlFor="Name">Name</label>
            </div>
            {errors.name ? (
              <p className="error-mesage">{errors.name.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input type="text" id="Age" required {...register('age')} />
              <label htmlFor="Age">Age</label>
            </div>
            {errors.age ? (
              <p className="error-mesage">{errors.age.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input type="email" id="Email" required {...register('email')} />
              <label htmlFor="Email">Email</label>
            </div>
            {errors.email ? (
              <p className="error-mesage">{errors.email.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input
                type="password"
                id="Password1"
                required
                {...register('pasword1')}
              />
              <label htmlFor="Password1">Password</label>
            </div>
            {errors.pasword1 ? (
              <p className="error-mesage">{errors.pasword1.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input
                type="password"
                id="Password2"
                required
                {...register('pasword2')}
              />
              <label htmlFor="Password2">Password</label>
            </div>
            {errors.pasword2 ? (
              <p className="error-mesage">{errors.pasword2.message}</p>
            ) : (
              <></>
            )}
            <AutocompleteWhithRef
              register={register('country')}
              data={countries}
              label="Country"
              ref={ref}
            />
            {errors.country ? (
              <p className="error-mesage">{errors.country.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <select defaultValue={'?'} {...register('gender')}>
                <option value="?" disabled>
                  Gender
                </option>
                <option value={`Somsing else`}>Somsing else</option>
                <option value={`Male`}>Male</option>
                <option value={`Female`}>Female</option>
              </select>
            </div>
            {errors.gender ? (
              <p className="error-mesage">{errors.gender.message}</p>
            ) : (
              <></>
            )}
            <div className="group checkbox">
              <input
                type="checkbox"
                id="T_C"
                className="checkbox"
                {...register('acceptT_C')}
              />
              <label htmlFor="T_C">I agree send form</label>
            </div>
            {errors.acceptT_C ? (
              <p className="error-mesage">{errors.acceptT_C.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input
                className="pic-input"
                type="file"
                id="picture"
                accept=".png, .jpeg, .jpg"
                {...register('picture')}
              />
              <label htmlFor="picture" className="pic-label">
                Please load picture
              </label>
            </div>
            {errors.picture ? (
              <p className="error-mesage">{errors.picture.message}</p>
            ) : (
              <></>
            )}
            <input type="submit" className="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
