import { Role } from '../enums/role.enum';

export interface User {
  id?: number;  // '?' indicates it's an optional property
  firstName: string;
  lastName: string;
  email: string;
  token: number;
  password: string;
  role: Role;
}