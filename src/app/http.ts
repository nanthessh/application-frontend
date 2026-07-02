import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Http {
  
  constructor(private http:HttpClient) {  }
  public ApiUrl = 'https://localhost:44365/api';

  getEmployees() {
    return this.http.get(`${this.ApiUrl}/Employee`);
  }

  createEmployee(data: any) {
    return this.http.post(`${this.ApiUrl}/Employee`, data);
  }

  updateEmployee(id: number, data: any) {
    return this.http.put(`${this.ApiUrl}/Employee/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.ApiUrl}/Employee/${id}`);
  }

  getEmployeeById(id: number) {
    return this.http.get(`${this.ApiUrl}/Employee/${id}`);
  }
}
