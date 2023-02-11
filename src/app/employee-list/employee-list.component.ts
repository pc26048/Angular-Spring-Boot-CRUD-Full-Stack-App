import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees!: Employee[];
 // constructor(){
  //  this.employees=[{"id":1,"firstName":"pra","lastName":"ch","email":"pc26048@"}];
//  }


  constructor(private employeeService: EmployeeService,private router: Router){
    this.employeeService.getEmployeeList().subscribe((data:Employee[])=>{
      this.employees=data;
    });


  
  }



  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe((data:Employee[])=>{
      this.employees=data;
    });
  }



  updateEmployee(id:number){
      this.router.navigate(['update-employee',id]);
  }


  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }



  
  
  

  
  
  
  
} 



