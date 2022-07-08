export enum Roles {
  Admin = 1,
  Student = 2,
  CR = 3,
}
export interface ResponseData {
  error: number;
  message: string;
}
export interface User {
  username: string;
  fullName: string;
  email: string;
  roleName: string;
  roleID: number;
  password: string;
}
export interface Company {
  companyID: number;
  companyName: string;
  address: string;
  phone: string;
  email: string;
  webSite: string;
  fieldName: number;
  introduction: string;
  description: string;
  imageURL: string;
  activeStatus: boolean;
  applyPosition: string;
}
export interface Student extends User {
  studentID: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  phone: string;
  major: string;
  fieldName: string;
  cV_URL: string;
  ojtStatus: boolean;
  username: string;
}
