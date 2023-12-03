export interface IFormData {
  name: string;
  age: number;
  email: string;
  pasword1: string;
  pasword2: string;
  gender: Gender;
  acceptT_C: boolean;
  picture: string;
  country: string;
}

type Gender = 'Male' | 'Female' | `Somsing else`;
