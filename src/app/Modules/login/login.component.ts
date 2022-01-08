import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    })
  }
    
  onSubmit(){
    console.log(this.LoginForm);
  }
}
