import { Role } from '../../../modal/enums/role.enum';

export interface AuthenticationResponseDTO {
    token: string;
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    role: Role; 
    tokens: number;
}