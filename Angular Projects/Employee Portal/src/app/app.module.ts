import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmpOptionsComponent } from './emp-options/emp-options.component';
import { ShowEmpInfoComponent } from './show-emp-info/show-emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpOptionsComponent,
    ShowEmpInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
