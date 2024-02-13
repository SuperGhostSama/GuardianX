import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { RoleService } from 'src/app/services/role/role.service'; // Replace with your actual service
import { RoleResponseDTO } from 'src/app/dto/responses/role-response.dto'; // Replace with your actual response data type

@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements Resolve<RoleResponseDTO[]> {

  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoleResponseDTO[]> {
    return this.roleService.getAllRoles()
      .pipe(
        catchError(error => {
          console.error('Error fetching roles:', error);
          return of([]);
        }),
        map(roles => roles)
      );
  }
  
}
