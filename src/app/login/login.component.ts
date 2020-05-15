import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'fitz.parmentier@intiimmobilier.com'
  password = '0000'
  invalidLogin = false
  essaisConnexion=false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if(this.essaisConnexion==false){
      this.essaisConnexion=true
    }
    console.log(this.essaisConnexion);

    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['compte'])
        this.invalidLogin = false
        sessionStorage.setItem('username', this.username);
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }
}