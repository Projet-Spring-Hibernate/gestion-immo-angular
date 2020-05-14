import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication-service/authentication.service'
@Component({
  selector: 'app-navbar-vitrine',
  templateUrl: './navbar-vitrine.component.html',
  styleUrls: ['./navbar-vitrine.component.css']
})
export class NavbarVitrineComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
