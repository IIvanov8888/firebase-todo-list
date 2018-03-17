import { Routes } from '@angular/router';
import { ItemsListComponent } from '../items/items-list/items-list.component';

/**
 * Created by IIvanov
 */

export const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  { path: 'items', component: ItemsListComponent },
];
