import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../header/header';
import { Http } from '../http';

@Component({
  selector: 'app-edit-employee',
  imports: [Header, FormsModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css',
})
export class EditEmployee implements OnInit {
  employee: any = {};
  id!: number;

  constructor(private httpService: Http, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getEmployeeById(this.id).subscribe((data: any) => {
      this.employee = data;
    });
  }

  onUpdate() {
    this.httpService.updateEmployee(this.id, this.employee).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
