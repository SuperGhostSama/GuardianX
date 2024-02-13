import { Component } from '@angular/core';
import { RoleResponseDTO } from 'src/app/dto/responses/role-response.dto';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  roles: RoleResponseDTO[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getAllRoles().subscribe(
      (roles: RoleResponseDTO[]) => {
        this.roles = roles;
        console.log('Roles:', roles);
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }
}
