import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':slug', component: DetailComponent },
];

@NgModule({
  declarations: [ BlogComponent, DetailComponent ],
  imports: [ RouterModule.forChild(routes), CommonModule],
  exports: [ RouterModule ],
})
export class BlogRoutingModule { }
