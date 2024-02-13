import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { authGuard } from './guard/auth/auth.guard';
import { RoleComponent } from './components/dashboard/role/role.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent ,
    title : 'Login Page'
  },
  {
    path : 'register',
    component : RegisterComponent ,
    title : 'Register Page'
  },
  {
    path : 'role',
    component : RoleComponent ,
    title : 'Roles Page',
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
