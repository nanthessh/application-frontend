import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../header/header';
import { Http } from '../http';

@Component({
  selector: 'app-create-employee',
  imports: [Header, FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee = { name: '', email: '', department: '', salary: 0, joinedDate: '' };

  constructor(private httpService: Http, private router: Router) {}

  onSubmit() {
    this.httpService.createEmployee(this.employee).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
