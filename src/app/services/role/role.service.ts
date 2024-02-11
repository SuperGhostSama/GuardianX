import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleResponseDTO } from '../../dto/responses/role-response.dto'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private apiUrl = `${environment.apiUrl}/role`;

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<RoleResponseDTO[]> {
    return this.http.get<RoleResponseDTO[]>(`${this.apiUrl}`);
  }

  saveRole(roleToSave: any): Observable<RoleResponseDTO> {
    return this.http.post<RoleResponseDTO>(`${this.apiUrl}`, roleToSave);
  }

  grantAuthorities(rolesAuthorities: any): Observable<RoleResponseDTO> {
    return this.http.put<RoleResponseDTO>(
      `${this.apiUrl}/grant_authorities`,
      rolesAuthorities
    );
  }

  revokeAuthorities(rolesAuthorities: any): Observable<RoleResponseDTO> {
    return this.http.put<RoleResponseDTO>(
      `${this.apiUrl}/revoke_authorities`,
      rolesAuthorities
    );
  }

  grantRoleToUser(grantRoleToUserRequestDto: any): Observable<RoleResponseDTO> {
    return this.http.post<RoleResponseDTO>(
      `${this.apiUrl}/grant_role_to_user`,
      grantRoleToUserRequestDto
    );
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
