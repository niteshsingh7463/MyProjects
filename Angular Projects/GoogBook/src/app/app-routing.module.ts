import { ResultPageComponent } from './result-page/result-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'books',
    component: ResultPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
