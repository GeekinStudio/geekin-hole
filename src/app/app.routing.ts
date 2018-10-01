import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ErrComponent} from './err/err.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogGuard} from './home/log.guard';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [LogGuard]
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: ErrComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }
    )],
  exports: [
    RouterModule
  ]
})

export class AppRouting {
}
