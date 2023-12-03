import * as yup from 'yup';

export const setupSchema = (countries: string[]) => {
  return yup.object().shape({
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
      .required('Choose gender'),
    acceptT_C: yup.boolean().equals([true], 'Confirm form send'),
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
};
