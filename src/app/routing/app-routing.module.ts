import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from '../components/user-login/user.login.component';
import { ItemsListComponent } from '../items/items-list/items-list.component';
import { HomeComponent } from '../components/home/home.component';

import { AuthGuard } from '../core/auth.guard';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
