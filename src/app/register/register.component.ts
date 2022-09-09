import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  error;

  passwordType;

  showIcon;

  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.passwordType = "password";
  }

  buildForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      this.authService.sinUpUser(data.email, data.password)
      .then(result => {
        console.log(result);
        this.isLoading = false;
        this.router.navigate(['login'])
      })
      .catch(error => {
        this.error = error.message;
        this.isLoading = false;
      })
    }
  }

  onChange() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.showIcon = true;
    } else {
      this.passwordType = 'password';
      this.showIcon = false;
    }
  }
}
