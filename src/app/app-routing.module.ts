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
  {
    path: 'lazy',
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./lazy-loading-admin/lazy-loading-admin-routing.module')
          .then(mod => mod.LazyLoadingAdminRoutingModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./lazy-loading-user/lazy-loading-user-routing.module')
          .then(mod => mod.LazyLoadingUserRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
