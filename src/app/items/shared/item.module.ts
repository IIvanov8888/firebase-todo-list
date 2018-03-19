import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';

// import { SharedModule } from '../../shared/shared.module';

import { ItemService } from './item.service';

import { AppMaterialModule } from '../../material/material.module';

import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    // SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    ItemsListComponent,
    ItemDetailComponent,
  ],
  providers: [
    ItemService,
  ],
})
export class ItemModule { }
