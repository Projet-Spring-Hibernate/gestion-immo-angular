import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = 'password'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['compte/liste-biens'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }
}