import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingAdminRoutingModule } from './lazy-loading-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.warn("when required lazy loading module is loaded only one time not when first render")

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingAdminRoutingModule
  ]
})
export class LazyLoadingAdminModule { }
