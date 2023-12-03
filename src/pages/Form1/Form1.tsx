import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormData } from '../../types/formDataTypes';
import './Form.scss';
import { useActions } from '../../store/hook/hook';
import { convertImage } from '../../utils/convertImage';
import { Autocomplete } from '../../components/Autocomplete/Autocomplete';

export const Form1: FC = () => {
  const { register, handleSubmit } = useForm<IFormData>();
  const { setFirstFormData } = useActions();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(data);
    if (!data.picture.length) return;
    const file = data.picture[0] as unknown as File;
    data.picture = await convertImage(file);
    setFirstFormData(data);
  };

  return (
    <>
      <main>
        <div className="wrapper">
          <h1>This is form create with React Hook Form </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="group">
              <input type="text" id="Name" {...register('name')} />
              <label htmlFor="Name">Name</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="text" id="Age" {...register('age')} />
              <label htmlFor="Age">Age</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="email" id="Email" {...register('email')} />
              <label htmlFor="Email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="password" id="Password1" {...register('pasword1')} />
              <label htmlFor="Password1">Password</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="password" id="Password2" {...register('pasword2')} />
              <label htmlFor="Password2">Password</label>
              <div className="bar"></div>
            </div>
            <select defaultValue={'?'} {...register('gender')}>
              <option value="?" disabled>
                Gender
              </option>
              <option value={`Somsing else`}>Somsing else</option>
              <option value={`Male`}>Male</option>
              <option value={`Female`}>Female</option>
            </select>
            <div className="group">
              <input
                type="checkbox"
                id="T_C"
                className="checkbox"
                {...register('acceptT_C')}
              />
              <label htmlFor="T_C">I agree send form</label>
            </div>
            <div className="group">
              <label htmlFor="picture" className="pic-label">
                Plese load picture
              </label>
              <input
                className="pic-input"
                type="file"
                id="picture"
                accept=".png, .jpeg, .jpg"
                {...register('picture')}
              />
            </div>
            <Autocomplete register={register('country')} data={[]} />
            <input type="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
