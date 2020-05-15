import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modeles/contrat-modele/contrat.modele';
import { ActivatedRoute, Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { ConseillerService } from 'src/app/services/conseiller-services/conseiller.service';
import { ClientService } from 'src/app/services/client-service/client.service';
import { ContratService } from 'src/app/services/contrat-services/contrat.service';

@Component({
  selector: 'app-save-contrat',
  templateUrl: './save-contrat.component.html',
  styleUrls: ['./save-contrat.component.css']
})
export class SaveContratComponent implements OnInit {

  contrat:Contrat = {
    idContrat:null,
    prix:null,
    date:null,
    numeroRef:null,
    bienImmobilier:null,
    client:null,
    conseiller:null
  }

  listeClientsBdd=[]
  listeConseillersBdd=[]
  listeBienImmobilierBdd=[]

  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute, 
    private bienService : BienImmobilierService, 
    private conseillerService : ConseillerService, 
    private clientService : ClientService, 
    private contratService : ContratService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        const id = +parameterMap.get("id");
        console.log(id);
        this.findContratById(id);
      }
    )
  }

  async findContratById(id:number){
    console.log("In findContratById")
 
    this.listeBienImmobilierBdd= await this.getAllBiensImmos().toPromise()
    this.listeClientsBdd = await this.getAllClients().toPromise()
    this.listeConseillersBdd = await this.getAllConseillers().toPromise()
 
    if(id!=0){
      this.contratService.getByIdContratFromWsRest(id).subscribe(
        (data)=> {this.contrat=data}
      )
    }
  }
  async saveOrUpdateContrat(){
    console.log(this.contrat)
 
    if(this.contrat.idContrat != null){
      const result = await this.saveContrat(this.contrat).toPromise()
    }else{
 
     //Stocker les valeurs des props Clients, conseiller et BienImmo dans des constantes
     const conseiller = this.contrat.conseiller
     const client =  this.contrat.client
     const bienImmobilier = this.contrat.bienImmobilier
 
     //On retire ces prop de notre objet this.contrat
     this.contrat.conseiller=null
     this.contrat.client=null
     this.contrat.bienImmobilier=null
 
     console.log(this.contrat)
     //On ajoute la contrat à la bdd sans liaisons
     const result2 = await this.saveContrat(this.contrat).toPromise()
 
     //On recupere la contrat de la bdd avec son id
     const listeContrat = await this.getAllContrats().toPromise()
     this.contrat = listeContrat[listeContrat.length-1]
 
     //On reintegration des props que lon avait enlevé
     this.contrat.client=client
     this.contrat.bienImmobilier=bienImmobilier
     this.contrat.conseiller=conseiller
     console.log(this.contrat)
     //On modifie la contrat
     const result3 = await this.saveContrat(this.contrat).toPromise()
    }
    this.router.navigate(['/compte/liste-contrats']);
  }
 
  getAllBiensImmos(){
    return this.bienService.getAllBienImmobiliersFromWsRest()
  }
 
  getAllClients(){
    return this.clientService.getAllClientFromWsRest()
  }
 
  getAllConseillers(){
    return this.conseillerService.getAllConseillerFromWsRest()
  }
 
  getAllContrats(){
    return this.contratService.getAllContratFromWsRest()
  }
  saveContrat(contrat:Contrat){
    return this.contratService.saveContratWithWsRest(contrat)
  }
}
