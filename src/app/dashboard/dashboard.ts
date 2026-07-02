import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ListEmployee } from '../list-employee/list-employee';

@Component({
  selector: 'app-dashboard',
  imports: [Header,ListEmployee],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
