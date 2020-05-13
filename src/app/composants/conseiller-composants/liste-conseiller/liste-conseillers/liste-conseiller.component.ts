import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ConseillerService } from '../../../../services/conseiller-services/conseiller.service';
import { Conseiller } from '../../../../modeles/conseiller-modele/conseiller.modele';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-liste-conseiller',
  templateUrl: './liste-conseiller.component.html',
  styleUrls: ['./liste-conseiller.component.css']
})
export class ListeConseillerComponent implements OnInit {
  conseiller=[];
  conseiller2=[];
  constructor(private router : Router, private conseillerService : ConseillerService) { }

  ngOnInit(): void {
    
    


    this.getAllConseiller();
  }

async getAllConseiller(){

  this.conseiller = await this.getlisteConseiller().toPromise();
  const contart =  await this.getAllContratByConseiller(1).toPromise();


  var self = this;
  this.conseiller.forEach(async function(c){
    try{
    c.contrats= await self.getAllContratByConseiller(c.id).toPromise();
    c.visites = await self.getAllVisiteByConseiler(c.id).toPromise();
    console.log(c.contrats);
    self.conseiller2.push(c);
  }catch(e) {
    console.log(e);
}
  })
  console.log(this.conseiller2);
}

getAllContratByConseiller(id :number){
return this.conseillerService.getAllConseillerbyContratFromWsRest(id)
}

getAllVisiteByConseiler(id:number){
  return this.conseillerService.getAllVisitebyConseillerFromWsRest(id)
}

getlisteConseiller(){
  return this.conseillerService.getAllConseillerFromWsRest();
}
affichage(id : number){
  this.router.navigate(['compte/affichageconseiller/', id]);
}
}
