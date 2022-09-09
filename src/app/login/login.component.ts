import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  error;

  isLoading = false;

  passwordType;

  showIcon;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.passwordType = "password";
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.authService.logInUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        this.isLoading = false;
        this.authService.setLoginStatus(true);
        this.router.navigate(['/home'])
        })
      .catch(error => {
        this.error = error;
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
