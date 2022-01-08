import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModuleRoutingModule } from './user-routing-module-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModuleRoutingModule
  ]
})
export class UserRoutingModuleModule { }
