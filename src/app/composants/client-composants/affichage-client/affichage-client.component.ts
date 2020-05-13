import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NavbarVitrineComponent} from '../../../navbar-vitrine/navbar-vitrine.component';
import {  Client } from 'src/app/modeles/client-modele/client.modele';

@Component({
  selector: 'app-affichage-client',
  templateUrl: './affichage-client.component.html',
  styleUrls: ['./affichage-client.component.css']
})
export class AffichageClientComponent implements OnInit {

  //============= PROPS ===========================//

  constructor() { }

  ngOnInit(): void {
  }

}
