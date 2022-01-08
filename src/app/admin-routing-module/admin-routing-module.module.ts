import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModuleRoutingModule } from './admin-routing-module-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModuleRoutingModule
  ]
})
export class AdminRoutingModuleModule { }
