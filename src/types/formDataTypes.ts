export interface IFormData {
  name: string;
  age: number;
  email: string;
  pasword1: string;
  pasword2: string;
  gender: Gender;
  acceptT_C: boolean;
  picture: string;
  country: string | FileList;
}

export type Gender = 'Male' | 'Female' | `Somsing else`;

export interface IFormDataError {
  name: string;
  age: string;
  email: string;
  pasword1: string;
  pasword2: string;
  gender: string;
  acceptT_C: string;
  picture: string;
  country: string;
}
