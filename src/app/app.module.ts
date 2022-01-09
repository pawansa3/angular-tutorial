import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { UsersModule } from './users/users.module'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { ReusableComponentComponent } from './reusable-component/reusable-component.component';
import { DataChildtoParentComponent } from './data-childto-parent/data-childto-parent.component';
import { UserRoutingComponent } from './user-routing/user-routing.component';
import { AdminRoutingComponent } from './admin-routing/admin-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive'
import { HttpClientModule } from '@angular/common/http'


import { AdminRoutingModuleModule } from './admin-routing-module/admin-routing-module.module';
import { UserRoutingModuleModule } from './user-routing-module/user-routing-module.module';
import { LazyAdminListComponent } from './lazy-admin-list/lazy-admin-list.component';
import { LazyUserListComponent } from './lazy-user-list/lazy-user-list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    ReusableComponentComponent,
    DataChildtoParentComponent,
    UserRoutingComponent,
    AdminRoutingComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    LazyAdminListComponent,
    LazyUserListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    AdminRoutingModuleModule,
    UserRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
