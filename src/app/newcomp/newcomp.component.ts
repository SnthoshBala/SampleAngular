import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'Models/Login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  user:Login={
    name:'',
    password:''
  }
  constructor(private obj :LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  post_api(login:Login):void
  {
    this.obj.Login(login).subscribe(data=>
      {
        {debugger}
        const token=data;
        localStorage.setItem("jwt",token);      
        this.router.navigate(['/bala']);
      })
  }
}
