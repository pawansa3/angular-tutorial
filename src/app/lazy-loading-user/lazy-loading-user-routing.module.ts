import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../lazy-loading-user/list/list.component';
import { LoginComponent } from '../lazy-loading-user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingUserRoutingModule { }
