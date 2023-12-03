import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormData } from '../../types/formDataTypes';
import './Form.scss';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { convertImage } from '../../utils/convertImage';
import { Autocomplete } from '../../components/Autocomplete/Autocomplete';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Form1: FC = () => {
  const { countries } = useAppSelector((store) => store.countrySlice);

  const schema = yup.object().shape({
    name: yup.string().min(2, 'To short').required('Input name'),
    age: yup.number().positive().integer().required('Input age'),
    email: yup.string().email().required('Input email'),
    pasword1: yup
      .string()
      .matches(/[A-Z]/, 'Password must have 1 uppercase letter')
      .matches(/[a-z]/, 'Password must have 1 lowercase letter')
      .matches(/\d/, 'Password must have 1 digit')
      .matches(
        /[!@#$%^&*]/,
        'Password must have 1 special character (!@#$%^&*)'
      )
      .min(8)
      .required('Input password'),
    pasword2: yup
      .string()
      .oneOf([yup.ref('pasword1')], 'Passwords must match')
      .required('Input password'),
    gender: yup
      .string()
      .oneOf(['Male', 'Female', `Somsing else`], 'Chose gender')
      .required(),
    acceptT_C: yup.boolean().equals([true], 'Confirm form send').required(),
    country: yup
      .string()
      .oneOf(countries, 'Not Should this country')
      .required('Input country'),
    picture: yup
      .mixed<FileList>()
      .required('Load image')
      .test('type', 'You mast load image', (value: FileList) => {
        if (!value.length) return false;
        if (
          value[0].type === 'image/jpeg' ||
          value[0].type === 'image/jpg' ||
          value[0].type === 'image/png'
        )
          return true;
        return false;
      })
      .test(
        'size',
        'Too large',
        (value) => !value.length || value[0].size < 1024 * 1024
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const { setFirstFormData } = useActions();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    if (!data.picture.length) return;
    const file = data.picture[0] as unknown as File;
    data.picture = await convertImage(file);
    setFirstFormData(data);
    reset();
  };

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
              {errors.pasword1 ? (
                <p className="error-mesage">{errors.pasword1.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="group">
              <input
                type="password"
                id="Password2"
                required
                {...register('pasword2')}
              />
              <label htmlFor="Password2">Password</label>
              {errors.pasword2 ? (
                <p className="error-mesage">{errors.pasword2.message}</p>
              ) : (
                <></>
              )}
            </div>
            <Autocomplete
              register={register('country')}
              data={countries}
              label="Country"
            />
            {errors.country ? (
              <p className="error-mesage">{errors.country.message}</p>
            ) : (
              <></>
            )}
            <select defaultValue={'?'} {...register('gender')}>
              <option value="?" disabled>
                Gender
              </option>
              <option value={`Somsing else`}>Somsing else</option>
              <option value={`Male`}>Male</option>
              <option value={`Female`}>Female</option>
            </select>
            {errors.gender ? (
              <p className="error-mesage">{errors.gender.message}</p>
            ) : (
              <></>
            )}
            <div className="group">
              <input
                type="checkbox"
                id="T_C"
                className="checkbox"
                {...register('acceptT_C')}
              />
              <label htmlFor="T_C">I agree send form</label>
              {errors.acceptT_C ? (
                <p className="error-mesage">{errors.acceptT_C.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="group">
              <input
                className="pic-input"
                type="file"
                id="picture"
                accept=".png, .jpeg, .jpg"
                {...register('picture')}
              />
              <label htmlFor="picture" className="pic-label">
                Plese load picture
              </label>
              {errors.picture ? (
                <p className="error-mesage">{errors.picture.message}</p>
              ) : (
                <></>
              )}
            </div>
            <input type="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
