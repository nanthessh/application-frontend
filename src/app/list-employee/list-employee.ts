import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '../http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  imports: [CommonModule],
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee implements OnInit {
  listEmployee: any[] = [];

  constructor(private httpService: Http, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.httpService.getEmployees().subscribe({
      next: (data: any) => {
        console.log('Data:', data);
        this.listEmployee = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  editEmployee(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee(id: number) {
    this.httpService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
