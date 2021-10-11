import { Component, OnInit } from '@angular/core';
import { Employee } from 'Models/Employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  employee:Employee[]=[];
  user:Employee={
    id:0,
    age:0,
    name:""
  };
  postuser:Employee={
    id:0,
    age:0,
    name:""
  };
  msg:string="";
  flag:boolean=false;
  constructor(private router: Router, private obj: EmployeeserviceService,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {

  }
  get_api():void{
    this.obj.getAllEmployee().subscribe(data=>
      {
        this.employee=data;
        console.log(this.employee);
      }
    );
  }
  getid_api(id:number):void
  {
    this.flag=true;
    this.obj.getEmployeeById(id).subscribe(data=>
      {
        this.user=data;
        console.log(this.user);
      })
  }
  delete_api(id:number):void
  {
    this.obj.deleteEmployee(id).subscribe(data=>
      {
        this.msg="Deleted";
        alert(this.msg);
      });
  }
  post_api(emp:Employee):void{
    this.obj.postEmployee(emp).subscribe(data=>
      {
        this.msg="Added"
      });
      console.log(this.msg);
  }
  put_api(emp:Employee,id:number):void
  {
    this.obj.putEmployee(emp,id).subscribe(
      data=>{
        this.msg="Updated"
      }
    );
    console.log(this.msg);
  }
  Move():void{
    this.router.navigate(['/new']);
  }
  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  Logout():void{
    localStorage.removeItem("jwt");
    this.router.navigate(['/new']);
  }
}
