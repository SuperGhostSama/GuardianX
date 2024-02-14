import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.register({ name: this.name, email: this.email, password: this.password })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (registrationResponse) => {
            console.log('Registration successful:', registrationResponse);
            this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );

  }

}
  
