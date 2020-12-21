import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BalComponent } from './user/bal/bal.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/user/login',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationComponent,
        children: [
          {
            path: 'bal',
            component: BalComponent
          }
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
