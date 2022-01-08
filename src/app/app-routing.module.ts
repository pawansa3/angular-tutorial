import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingComponent } from './admin-routing/admin-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRoutingComponent } from './user-routing/user-routing.component';


const routes: Routes = [
  // {
  // path:'user',
  // component: UserRoutingComponent
  // },
  // {
  //   path: 'admin',
  //   component: AdminRoutingComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
