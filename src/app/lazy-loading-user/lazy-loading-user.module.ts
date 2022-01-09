import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingUserRoutingModule } from './lazy-loading-user-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingUserRoutingModule
  ]
})
export class LazyLoadingUserModule { }
