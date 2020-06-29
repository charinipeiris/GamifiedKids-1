import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import {Router} from '@angular/router';
import {ServicesService} from "../Services/services.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  invalidLogin:boolean = false;
  constructor(private formBuilder : FormBuilder,
              private router:Router,
              private apiService:ServicesService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.required]
    })
  }
onSubmit(){
  console.log(this.loginForm.value)
}

}
