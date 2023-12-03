import { FC, FormEvent, useRef } from 'react';
import { AutocompleteWhithRef } from '../../components/Autocomplete/Autocomplete';
import '../Form1/Form.scss';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { setupSchema } from '../../utils/setupSchema';
import { convertImage } from '../../utils/convertImage';
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../../types/formDataTypes';

export const Form2: FC = () => {
  const { countries } = useAppSelector((store) => store.countrySlice);
  const navigate = useNavigate();
  const { setSecondFormData } = useActions();

  const schema = setupSchema(countries);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pasword1Ref = useRef<HTMLInputElement>(null);
  const pasword2Ref = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptT_CRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = (await schema.validate({
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      pasword1: pasword1Ref.current?.value,
      pasword2: pasword2Ref.current?.value,
      gender: genderRef.current?.value,
      acceptT_C: acceptT_CRef.current?.checked,
      country: countryRef.current?.value,
      picture: pictureRef.current?.files,
    })) as unknown as IFormData;

    if (!data.picture.length) return;
    const file = data.picture[0] as unknown as File;
    data.picture = await convertImage(file);
    setSecondFormData(data);
    navigate('/main');
  };

  return (
    <>
      <main>
        <div className="wrapper">
          <h1>It`s similar form</h1>
          <form className="form" onSubmit={onSubmit}>
            <div className="group">
              <input type="text" id="Name" required ref={nameRef} />
              <label htmlFor="Name">Name</label>
            </div>
            <div className="group">
              <input type="text" id="Age" required ref={ageRef} />
              <label htmlFor="Age">Age</label>
            </div>
            <div className="group">
              <input type="email" id="Email" required ref={emailRef} />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="group">
              <input
                type="password"
                id="Password1"
                required
                ref={pasword1Ref}
              />
              <label htmlFor="Password1">Password</label>
            </div>
            <div className="group">
              <input
                type="password"
                id="Password2"
                required
                ref={pasword2Ref}
              />
              <label htmlFor="Password2">Password</label>
            </div>
            <AutocompleteWhithRef
              data={countries}
              label="Country"
              ref={countryRef}
            />
            <select defaultValue={'?'} ref={genderRef}>
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
                ref={acceptT_CRef}
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
                ref={pictureRef}
              />
            </div>
            <input type="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
