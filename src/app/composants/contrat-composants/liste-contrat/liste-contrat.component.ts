import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratService } from 'src/app/services/contrat-services/contrat.service';
import { Contrat } from 'src/app/modeles/contrat-modele/contrat.modele';

@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {

  listeContrat=[];

  constructor(private router : Router, private contratService : ContratService) { }

  ngOnInit(): void {
    this.getAllContrat();
  }
  getAllContrat(){
    console.log("in getAllContrat");
    this.contratService.getAllContratFromWsRest().subscribe(
      data=>this.listeContrat=data
    )
  }

}
