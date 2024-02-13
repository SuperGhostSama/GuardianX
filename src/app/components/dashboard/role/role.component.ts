import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleResponseDTO } from 'src/app/dto/responses/role-response.dto';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  roles: RoleResponseDTO[] = [];

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roles = data['roles']; // Access roles data from resolver
    });
  }

  // ngOnInit(): void {
  //   this.loadRoles();
  // }

  // loadRoles() {
  //   this.roleService.getAllRoles().subscribe(
  //     (roles: RoleResponseDTO[]) => {
  //       this.roles = roles;
  //       console.log('Roles:', roles);
  //     },
  //     (error) => {
  //       console.error('Error fetching roles:', error);
  //     }
  //   );
  // }
}
