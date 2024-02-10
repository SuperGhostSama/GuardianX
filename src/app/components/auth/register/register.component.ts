import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router
  ) {}

  onSubmit() {
  }
  
  
    

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
