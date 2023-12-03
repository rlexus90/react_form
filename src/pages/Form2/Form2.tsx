import { FC } from 'react';
import { Autocomplete } from '../../components/Autocomplete/Autocomplete';
import '../Form1/Form.scss';
import { useAppSelector } from '../../store/hook/hook';

export const Form2: FC = () => {
  const { countries } = useAppSelector((store) => store.countrySlice);

  return (
    <>
      <main>
        <div className="wrapper">
          <h1>It`s similar form</h1>
          <form className="form">
            <div className="group">
              <input type="text" id="Name" required />
              <label htmlFor="Name">Name</label>
            </div>
            <div className="group">
              <input type="text" id="Age" required />
              <label htmlFor="Age">Age</label>
            </div>
            <div className="group">
              <input type="email" id="Email" required />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="group">
              <input type="password" id="Password1" required />
              <label htmlFor="Password1">Password</label>
            </div>
            <div className="group">
              <input type="password" id="Password2" required />
              <label htmlFor="Password2">Password</label>
            </div>
            <Autocomplete data={countries} label="Country" required />
            <select defaultValue={'?'}>
              <option value="?" disabled>
                Gender
              </option>
              <option value={`Somsing else`}>Somsing else</option>
              <option value={`Male`}>Male</option>
              <option value={`Female`}>Female</option>
            </select>
            <div className="group">
              <input type="checkbox" id="T_C" className="checkbox" />
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
              />
            </div>
            <input type="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
