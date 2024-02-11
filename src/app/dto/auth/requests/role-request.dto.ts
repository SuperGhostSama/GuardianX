import { AuthorityEnum } from '../../../modal/enums/authority.enum';

export interface RoleReauestDTO {
    name: string;
    authorities: AuthorityEnum[];
    isDefault: boolean;
}