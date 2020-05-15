import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  ClientService } from 'src/app/services/client-service/client.service';
import { Client} from 'src/app/modeles/client-modele/client.modele';


@Component({
  selector: 'app-affichage-client',
  templateUrl: './affichage-client.component.html',
  styleUrls: ['./affichage-client.component.css']
})
export class AffichageClientComponent implements OnInit {

  //============= PROPS ===========================//
  clt:Client={id:null,
    nom:null,
    telephonePerso:null,
    telephonePro:null,
    adresse:null,
    listeContrats:null,
    listeVisites:null,
    listeClasseStandard:null}

  id:number

  //============= CTOR ===========================//
  
    /**
   * Ctor du composant
   * -> injection du service comme dependance
   * -> Injection du router pour la naviagation
   */
  constructor(private router : Router, private activatedRoute : ActivatedRoute, private clientService : ClientService) { }

  //============= METHODE INIT ===========================//
  /**
  * appel de la méthode à l'initialisation du composant
  */
 ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(
    (parameterMap)=>{
      //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
      this.id = +parameterMap.get("id");
    })
  console.log(this.id)
    this.findClient(this.id)
}

async findClient(id:number){
  console.log("in getClientById")
  this.clt=await this.getClientById(id).toPromise()
  this.clt.listeVisites= await this.getVisitesByIdCLient(id).toPromise()
  this.clt.listeContrats= await this.getContratsByIdClient(id).toPromise()
  
}

modifier(id:number){
  this.router.navigate(['compte/save-client/'+id]);
}

async supprimer(id:number){
  console.log("dans la fonction supprimer")
  const suppr = await this.delete(id).toPromise()

  //this.router.navigate(['/compte/liste-client']);
  console.log(suppr)
}
delete(id:number){
  return this.clientService.deleteClientWithWsRest(id)
}


getClientById(id:number){
  return this.clientService.getByIdClientFromWsRest(id)
}

getVisitesByIdCLient(id:number){
  return this.clientService.getListeVisitesByIdContratFromWs(id)
}

getContratsByIdClient(id:number){
  return this.clientService.getListeContratsByIdContratFromWs(id)
}





}