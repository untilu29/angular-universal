import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'cv', loadChildren: './resume/resume.module#ResumeModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: true,
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
