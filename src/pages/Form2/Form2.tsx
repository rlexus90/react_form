import { FC } from 'react';
import { Autocomplete } from '../../components/Autocomplete/Autocomplete';
import '../Form1/Form.scss';

export const Form2: FC = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <h1>It`s similar form</h1>
          <form className="form">
            <div className="group">
              <input type="text" id="Name" />
              <label htmlFor="Name">Name</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="text" id="Age" />
              <label htmlFor="Age">Age</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="email" id="Email" />
              <label htmlFor="Email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="password" id="Password1" />
              <label htmlFor="Password1">Password</label>
              <div className="bar"></div>
            </div>
            <div className="group">
              <input type="password" id="Password2" />
              <label htmlFor="Password2">Password</label>
              <div className="bar"></div>
            </div>
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
            <Autocomplete data={[]} />
            <input type="submit" value={'Comfirm form'} />
          </form>
        </div>
      </main>
    </>
  );
};
