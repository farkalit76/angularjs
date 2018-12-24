import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  employees: Employee[] = [
    {
      id: 101,
      name: 'Akbar',
      gender: 'Male',
      email: 'emai@test.com',
      phoneNumber: 223333322,
      contactPrefrence: 'home',
      dateOfBirth: new Date('10/10/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/myphoto.jpg'
    },
    {
      id: 102,
      name: 'Jamil',
      gender: 'Male',
      email: 'emai@test.com',
      phoneNumber: 223333322,
      contactPrefrence: 'home',
      dateOfBirth: new Date('10/10/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/myphoto.jpg'
    },
    {
      id: 103,
      name: 'Usman',
      gender: 'Male',
      email: 'emai@test.com',
      phoneNumber: 223333322,
      contactPrefrence: 'home',
      dateOfBirth: new Date('10/10/1980'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/myphoto.jpg'
    }
  ];
}
