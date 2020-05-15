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
  listeconseiller=[];
  listeconseiller2=[];
  constructor(private router : Router, private conseillerService : ConseillerService) { }

  ngOnInit(): void {

    this.getAllConseiller();
  }

async getAllConseiller(){

  this.listeconseiller = await this.getlisteConseiller().toPromise();
  //const contart =  await this.getAllContratByConseiller(1).toPromise();


  var self = this;
  this.listeconseiller.forEach(async function(c){
    try{
    c.contrats= await self.getAllContratByConseiller(c.id).toPromise();
    c.visites = await self.getAllVisiteByConseiler(c.id).toPromise();
    console.log(c.contrats);
    self.listeconseiller2.push(c);
  }catch(e) {
    console.log(e);
}
  })
  console.log(this.listeconseiller2);
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

delete(id:number){
  return this.conseillerService.deleteConseiller(id);
}
async modifier(id:number){

    this.router.navigate(['compte/save-conseillers/'+id]);
  
  
}

async supprimer(id:number){

  const suppr = await this.delete(id).toPromise()
  console.log(suppr)
  this.getAllConseiller()
  this.router.navigate(['/compte/liste-conseillers']);
  console.log("conseiller supprimer")
}





}
