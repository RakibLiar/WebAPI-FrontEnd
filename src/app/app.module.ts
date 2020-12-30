import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { BalComponent } from './user/bal/bal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './shared/user.service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { AuthInterceptor } from './auth/auth.intercepto';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    BalComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
