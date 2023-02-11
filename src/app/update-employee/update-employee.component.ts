import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterConfigOptions } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  


  employee :Employee=new Employee();
  id!: number;
  constructor(private employeeService: EmployeeService,private router:Router,private route: ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });

  }
  
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    });
  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }

  


  

  


}
