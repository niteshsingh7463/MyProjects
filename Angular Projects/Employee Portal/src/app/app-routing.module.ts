import { ShowEmpInfoComponent } from './show-emp-info/show-emp-info.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'emps/:location',
    component: EmployeeComponent
  },
  {
    path: 'emps',
    component: EmployeeComponent,
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: ShowEmpInfoComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/emps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
