import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutinModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports:     [ AppRoutinModule, BrowserModule, FormsModule, ReactiveFormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, LoginComponent, RegisterComponent, HomeComponent, LoaderComponent ],
  providers: [ AuthService, AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
