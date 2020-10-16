import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  departments = [{id: 1, value: 'Dept 1'},
                {id: 2, value: 'Dept 2'},
                {id: 3, value: 'Dept 3'}]

  ngOnInit(): void {
  }

}
