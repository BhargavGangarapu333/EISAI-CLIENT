import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { Mapper } from '../models/mapper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  departmentForm: FormGroup;
  departmentsList: Department[] = [];
  department = new Department();
  successMessage = '';
  errorMessage = '';
  serviceSubscription: Subscription;
  constructor(private formBuilder: FormBuilder,
    private deptService: DepartmentService) { }

  ngOnInit() {
    this.department.deptId = 0;
    this.departmentForm = this.formBuilder.group({
      deptName: ['', [ Validators.required, Validators.maxLength(50) ]],
      deptCode: ['', [ Validators.required, Validators.minLength(6) ]]
    });
    this.loadDepartments();
  }

  loadDepartments() {
    this.serviceSubscription = this.deptService.getDepartments().subscribe(
      response => {
        this.departmentsList = Mapper.mapDepartmentsData(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  get controls() {
    return this.departmentForm.controls;
  }

  clearControls() {
    this.departmentForm.reset();
    this.successMessage = this.errorMessage = '';
  }

  saveDepartment() {
    if (this.departmentForm.valid) {
      if (this.department.deptId !== undefined && this.department.deptId !== null && this.department.deptId !== 0) {
        this.serviceSubscription = this.deptService.updateDepartment(this.department).subscribe(
          response => {
            if (response !== undefined && response !== null) {
              this.successMessage = response as string;
              this.departmentForm.reset();
              this.loadDepartments();
              this.department.deptId = 0;
            }
          },
          error => {
            this.errorMessage = 'Error Occured';
          }
        )
      } else {
        this.serviceSubscription = this.deptService.saveDepartment(this.department).subscribe(
        response => {
          if (response !== undefined && response !== null) {
            this.successMessage = response as string;
            this.departmentForm.reset();
            this.loadDepartments();
          }
        },
        error => {
          this.errorMessage = 'Error Occured';
        }
      );
      }
    }
  }

  editDepartment(deptData: Department) {
    this.department.deptId = deptData.deptId;
    this.department.deptName = deptData.deptName;
    this.department.deptCode = deptData.deptCode;
  }

  deleteDepartment(deptData: Department) {
    this.deptService.deleteDepartment(deptData).subscribe(
      response => {
        if (response !== undefined && response !== undefined) {
          this.successMessage = response as string;
          this.loadDepartments();
        }
      },
      error => {
        this.errorMessage = error;
      }
    )
  }

ngOnDestroy() {
  if (this.serviceSubscription !== undefined && this.serviceSubscription !== null) {
    this.serviceSubscription.unsubscribe();
  }
}

}
