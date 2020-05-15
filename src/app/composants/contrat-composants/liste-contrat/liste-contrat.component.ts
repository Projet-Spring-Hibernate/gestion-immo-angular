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
  async getAllContrat(){
    console.log("in getAllContrat");
    this.listeContrat= await this.getAllFromWs().toPromise()
    console.log(this.listeContrat)
  }

  modifier(id :number){
    this.router.navigate(['compte/save-contrat/', id]);

  }//End editProprietaire()

 
  async supprimer(id:number){
    //const prop = await this.getById(id).toPromise()
    const suppr = await this.delete(id).toPromise()
    console.log(suppr)
    this.getAllContrat()
    this.router.navigate(['/compte/liste-contrats']);
    console.log("contrat supprimé")
  }

  
  getAllFromWs(){
    return this.contratService.getAllContratFromWsRest()
  }

  delete(id:number){
    return this.contratService.deleteContratWithWsRest(id)
  }

}
