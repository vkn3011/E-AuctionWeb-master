import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(public auth: AuthService)  {
  }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

}
