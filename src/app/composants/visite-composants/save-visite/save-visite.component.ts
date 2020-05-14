import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{VisiteService} from 'src/app/services/visite-services/visite.service'
import {ClientService} from 'src/app/services/client-service/client.service'
import {ConseillerService} from 'src/app/services/conseiller-services/conseiller.service'
import {BienImmobilierService} from 'src/app/services/bienImmobilier-services/bien-immobilier.service'
import {Visite} from 'src/app/modeles/visite-modele/visite.modele'

@Component({
  selector: 'app-save-visite',
  templateUrl: './save-visite.component.html',
  styleUrls: ['./save-visite.component.css']
})
export class SaveVisiteComponent implements OnInit {

  //============= PROPS ===========================//
  visite:Visite = {
    idVisite:null,
    dateDeVisite:null,
    heureDeVisite:null,
    bienImmobilier:null,
    client:null,
    conseiller:null
  }

  listeClientsBdd=[]
  listeConseillersBdd=[]
  listeBienImmobilierBdd=[]

  //============= CTOR ===========================//
  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute, 
    private bienService:BienImmobilierService,
    private conseillerService:ConseillerService,
    private clientService:ClientService,
    private visiteService:VisiteService) { }


  //============= METHODE INIT ===========================//

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");
        console.log(id);
        this.findVisiteById(id)
      }
    )
  }

 //============= METHODES ===========================// 


 async findVisiteById(id:number){
   console.log("In findVisiteById")

   this.listeBienImmobilierBdd= await this.getAllBiensImmos().toPromise()
   this.listeClientsBdd = await this.getAllClients().toPromise()
   this.listeConseillersBdd = await this.getAllConseillers().toPromise()

   if(id!=0){
     this.visiteService.getByIdVisiteFromWsRest(id).subscribe(
       (data)=> {this.visite=data}
     )
   }
 }

 async saveOrUpdateVisite(){
   console.log(this.visite)

   if(this.visite.idVisite != null){
     const result = await this.saveVisite(this.visite).toPromise()
   }else{

    //Stocker les valeurs des props Clients, conseiller et BienImmo dans des constantes
    const conseiller = this.visite.conseiller
    const client =  this.visite.client
    const bienImmobilier = this.visite.bienImmobilier

    //On retire ces prop de notre objet this.visite
    this.visite.conseiller=null
    this.visite.client=null
    this.visite.bienImmobilier=null

    //On ajoute la visite à la bdd sans liaisons
    const result2 = await this.saveVisite(this.visite).toPromise()

    //On recupere la visite de la bdd avec son id
    const listeVisite = await this.getAllVisites().toPromise()
    this.visite = listeVisite[listeVisite.length-1]

    //On reintegration des props que lon avait enlevé
    this.visite.client=client
    this.visite.bienImmobilier=bienImmobilier
    this.visite.conseiller=conseiller

    //On modifie la visite
    const result3 = await this.saveVisite(this.visite).toPromise()
   }
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

 getAllVisites(){
   return this.visiteService.getAllVisiteFromWsRest()
 }
 saveVisite(visite:Visite){
   return this.visiteService.saveVisiteWithWsRest(visite)
 }
}
