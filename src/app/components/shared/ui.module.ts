import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from '../user-login/user.login.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../home/home.component';
import { AppMaterialModule } from '../../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [
    UserLoginComponent,
    AppComponent,
    HomeComponent
  ],
  exports: [
    AppComponent
  ],
})
export class UiModule { }
