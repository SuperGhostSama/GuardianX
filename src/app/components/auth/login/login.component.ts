import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service'; // Adjust the path based on your file structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    // Call the authenticate method from AuthService
    this.authService.authenticate({ email: this.email, password: this.password })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (authenticationResponse) => {
            // Authentication successful, perform necessary actions
            console.log('Authentication successful:', authenticationResponse);

            localStorage.setItem('authToken', authenticationResponse.token);

            localStorage.setItem('name', authenticationResponse.name);
            localStorage.setItem('email', authenticationResponse.email);
            localStorage.setItem('role', authenticationResponse.role.name);

            // Extract and store authority names in local storage
            const authorityNames = authenticationResponse.role.authorities.map((authority: any) => authority.name);
            localStorage.setItem('authorities', JSON.stringify(authorityNames));

            // Redirect the user to /role
            this.router.navigate(['/role']);
        },
        (error) => {
          // Handle authentication error
          console.error('Authentication failed:', error);
        }
      );
  }

}
