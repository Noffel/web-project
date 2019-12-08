import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }
  model ={
    fullName:'',
    password:''
  };

  serverErrorMessages: string;


  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(){

    this.router.navigate(['/adminpage']);


  }


}
