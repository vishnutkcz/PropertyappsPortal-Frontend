
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BookpropertymodalComponent } from './modals/bookpropertymodal/bookpropertymodal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { SignupComponent } from './modals/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    BookpropertymodalComponent,
    LoginModalComponent,
    SignupComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
