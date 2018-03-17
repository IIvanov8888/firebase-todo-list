import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppMaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './components/app/app.component';
import { AppNavbarComponent } from './components/app/navbar/app.navbar.component';
import { ItemModule } from './items/shared/item.module';
import { AppRoutingModule } from './routing/app-routing.module';


@NgModule({
  declarations: [
    AppNavbarComponent,
    AppComponent
  ],
  imports: [
    ItemModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
