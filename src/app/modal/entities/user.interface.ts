import { Role } from '../entities/role.interface';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  token: number;
  password: string;
  role: Role;
}