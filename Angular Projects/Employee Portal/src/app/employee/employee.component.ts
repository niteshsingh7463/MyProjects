import { emps } from './../myDataFiles';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //  <- ------------------emp-options------------ ->
  designationArr = ['Manager', 'Trainee', 'President'];
  deptArr = ['Finance', 'Technology', 'Operations', 'HR'];
  designationStructure = null;
  deptStructure = null;
  // <- ------------------------------------------- ->
  constructor(private route: ActivatedRoute, private router: Router) { }

  // <- --------------------Employee Portal----------------------- ->
  EPlocation = 'All';
  EPDepartment = 'All';
  EPDesignation = 'All';

  // <- ------------------showEmpInfo------------------------- ->
  allData = emps;
  currDisplayArr = [];
  currPage = 1;
  page = '';
  //--------------------------------------------------------------- ->
  ngOnInit() {
    this.getDisplayArr();
    this.route.paramMap.subscribe(params => {


      if (this.EPlocation != params.get('location') && params.get('location') != null) { this.makeStructs(); this.currPage = 1 }
      if (params.get('location') != null) {

        this.EPlocation = params.get('location');

      }
      this.getDisplayArr()
    });
    this.route.queryParamMap.subscribe(queryparams => { this.page = queryparams.get("page"); if (queryparams.get("department") != null) { this.EPDepartment = queryparams.get("department"); } if (queryparams.get("designation") != null) { this.EPDesignation = queryparams.get("designation"); } })

    this.makeStructs();
    // console.log(this.designationStructure.selected)
  }
  //  <- ------------------emp-options------------ ->
  makeStructs() {
    this.designationStructure = { nameList: this.designationArr, selected: '' };
    this.deptStructure = this.deptArr.map(n1 => ({ name: n1, selected: false }));
  }
  emitChangeEmpOpt() {
    let selDesignation = this.designationStructure.selected;
    let selDepartmentArr = this.deptStructure.filter(n1 => n1.selected == true);

    let selDepartment = selDepartmentArr.map(n1 => n1.name);
    selDepartment = selDepartment.join(',');
    // console.log(selDesignation)
    if (selDesignation == '')
      this.EPDesignation = 'All';
    else
      this.EPDesignation = selDesignation;
    if (selDepartment == '')
      this.EPDepartment = 'All';
    else
      this.EPDepartment = selDepartment;

    let path = '/emps/' + this.EPlocation;
    let myparam = { department: this.EPDepartment, designation: this.EPDesignation };
    if (this.EPlocation != 'All')
      this.router.navigate([path], { queryParams: myparam });
    if (this.EPlocation == 'All')
      this.router.navigate(['/emps'], { queryParams: myparam });

    this.currPage = 1;

    // console.log("1", this.EPDepartment);
    // console.log("2", this.EPDesignation);
    this.getDisplayArr();
  }
  // <- ------------------------------------------- ->
  getDisplayArr() {
    let tempLoc = [];
    let tempDept = [];
    let tempDesig = [];
    if (this.EPlocation == 'All') {
      tempLoc = this.allData;
    } else {
      tempLoc = this.allData.filter(n1 => n1.location == this.EPlocation);
    }
    if (this.EPDepartment == 'All') {
      tempDept = tempLoc;
    } else {

      let temp1 = this.EPDepartment.split(',');
      for (let i = 0; i < temp1.length; i++) {
        let temp2 = tempLoc.filter(n1 => n1.department == temp1[i]);
        tempDept.push(...temp2);
      }
    }
    if (this.EPDesignation == 'All') {
      tempDesig = tempDept;
    } else {
      tempDesig = tempDept.filter(n1 => n1.designation == this.EPDesignation);
    }
    this.currDisplayArr = tempDesig;
    // console.log(this.currDisplayArr)
  }

  gotoPage(x) {
    this.currPage = this.currPage + x;
    let path = '';
    if (this.EPlocation == 'All') { path = "/emps"; } else {
      path = "/emps/" + this.EPlocation;
    }
    this.router.navigate([path], { queryParams: { page: this.currPage }, queryParamsHandling: "merge" });
  }

}
