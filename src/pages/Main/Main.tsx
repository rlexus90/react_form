import { FC, useEffect } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { FormDataComponent } from '../../components/FormDataComponent/FormDataComponent';
import { IFormData } from '../../types/formDataTypes';

export const Main: FC = () => {
  const { firstForm, secondForm } = useAppSelector((store) => store.formData);
  let firstFormData: Array<IFormData> = [];
  let secondFormData: Array<IFormData> = [];

  useEffect(() => {
    if (firstForm.length) firstFormData = firstForm.map((x) => x).reverse();
    if (secondForm.length) secondFormData = firstForm.map((x) => x).reverse();
  }, [firstForm, secondForm]);

  if (firstForm.length) firstFormData = firstForm.map((x) => x).reverse();
  if (secondForm.length) secondFormData = firstForm.map((x) => x).reverse();

  return (
    <>
      <main>
        <div className="wrapper">
          <div>
            <h2>First form data</h2>
            {firstFormData.length ? (
              firstFormData.map((data, ind) => {
                const isFirst = ind === 0 ? true : false;
                return (
                  <FormDataComponent
                    data={data}
                    isFirst={isFirst}
                    key={ind + '_1'}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div>
            <h2>Second form data</h2>
            {secondFormData.length ? (
              secondFormData.map((data, ind) => {
                const isFirst = ind === 0 ? true : false;
                return (
                  <FormDataComponent
                    data={data}
                    isFirst={isFirst}
                    key={ind + '_2'}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
