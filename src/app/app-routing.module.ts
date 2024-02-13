import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { authGuard } from './guard/auth/auth.guard';
import { RoleComponent } from './components/dashboard/role/role.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { PagenotfoundComponent } from './components/errors/pagenotfound/pagenotfound.component';
import { adminGuard } from './guard/admin/admin.guard';

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
    canActivate: [authGuard , adminGuard]
  },
  {
    path : 'profile',
    component : UserComponent ,
    title : 'User Profile Page',
    canActivate: [authGuard]
  },
  {
    // Wildcard route for handling unknown URLs
    path: '**',
    component: PagenotfoundComponent,
    title: 'Page Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
