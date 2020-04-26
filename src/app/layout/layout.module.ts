import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopLayoutComponent } from './top-layout/top-layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
declarations: [TopLayoutComponent],
imports: [ BrowserModule, RouterModule ],
providers: []
})
export class LayoutModule {}
