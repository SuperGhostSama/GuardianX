import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name: string | null = null;
  email: string | null = null;
  role: string | null = null;
  authorities: string[] | null = null;

  ngOnInit(): void {
    // Retrieve data from local storage
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.role = localStorage.getItem('role');

    const authoritiesString = localStorage.getItem('authorities');
    this.authorities = authoritiesString ? JSON.parse(authoritiesString) : null;
  }
}
