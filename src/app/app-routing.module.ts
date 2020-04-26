import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLayoutComponent } from './layout/top-layout/top-layout.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
