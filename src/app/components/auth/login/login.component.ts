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

          // Store the authentication token in localStorage
          localStorage.setItem('authToken', authenticationResponse.token);

          // Redirect the user to /dashboard or any desired route
          this.router.navigate(['/role']);
        },
        (error) => {
          // Handle authentication error
          console.error('Authentication failed:', error);
        }
      );
  }

}
