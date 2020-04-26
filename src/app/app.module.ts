import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DepartmentsComponent } from './departments/departments.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { EventsComponent } from './events/events.component';
import { TopLayoutComponent } from './layout/top-layout/top-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestrictCharsDirective } from './directives/restrict-input-chars.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpErrorInterceptor } from './services/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    RolesComponent,
    UsersComponent,
    ProductsComponent,
    EventsComponent,
    TopLayoutComponent,
    DashboardComponent,
    RestrictCharsDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
