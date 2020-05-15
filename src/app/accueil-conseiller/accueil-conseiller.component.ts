import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../services/conseiller-services/conseiller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conseiller } from '../modeles/conseiller-modele/conseiller.modele';

@Component({
  selector: 'app-accueil-conseiller',
  templateUrl: './accueil-conseiller.component.html',
  styleUrls: ['./accueil-conseiller.component.css']
})
export class AccueilConseillerComponent implements OnInit {
//============= PROPS ===========================//
  emailCurrentUser:string

  conseillerLogged:Conseiller
  //============= CTOR ===========================//

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private conseillerservice : ConseillerService) { }

    //============= METHODE INIT ===========================//

  ngOnInit(): void {
    this.emailCurrentUser=sessionStorage.getItem("username")
    this.getCurrentUser(this.emailCurrentUser)
  }

   //============= METHODES ===========================// 

   async getCurrentUser(email:string){
  this.conseillerLogged=await this.getConseillerByMail(email).toPromise()
  this.conseillerLogged.visites = await this.getVisite(this.conseillerLogged.id).toPromise();
  this.conseillerLogged.contrats = await this.getContrat(this.conseillerLogged.id).toPromise();

   }


   getConseillerByMail(email:string){
     return this.conseillerservice.getByEmailFromWs(email);
   }

   getVisite(id:number){
    return this.conseillerservice.getAllVisitebyConseillerFromWsRest(id);
  }
  
  getContrat(id:number){
    return this.conseillerservice.getAllConseillerbyContratFromWsRest(id);
  }
}
