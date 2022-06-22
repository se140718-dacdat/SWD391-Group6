export enum Roles {
    Admin = 1,
    Student = 2,
    CR = 3
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