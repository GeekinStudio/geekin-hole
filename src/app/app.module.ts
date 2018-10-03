import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';
import {HomeComponent} from './home/home.component';
import {AppRouting} from './app.routing';
import {ErrComponent} from './err/err.component';
import {LoginErrDialogComponent, LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent, RegisterErrDialogComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrComponent,
    LoginComponent,
    LoginErrDialogComponent,
    RegisterComponent,
    RegisterErrDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginErrDialogComponent,
    RegisterErrDialogComponent
  ]
})
export class AppModule { }
