import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import {  AppConstants } from '../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  saveDepartment(postData): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${AppConstants.baseApiUrl}${AppConstants.saveDepartmentDetails}`,
    JSON.stringify(postData), { responseType: 'json', headers});
  }

  updateDepartment(postData) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${AppConstants.baseApiUrl}${AppConstants.updateDepartmentDetails}`,
    JSON.stringify(postData), { responseType: 'json', headers});
  }

  deleteDepartment(deptData) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${AppConstants.baseApiUrl}${AppConstants.deleteDepartmentDetails}`, JSON.stringify(deptData),
    { responseType: 'json', headers});
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get(`${AppConstants.baseApiUrl}${AppConstants.getDepartmentDetails}`) as Observable<Department[]>;
  }

}
