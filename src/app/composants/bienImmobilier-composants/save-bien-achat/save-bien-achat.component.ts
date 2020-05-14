import { Component, OnInit } from '@angular/core';
import { BienAAcheter } from 'src/app/modeles/bienAAcheter-modele/bienAAcheter.modele';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ProprietaireService} from 'src/app/services/proprietaire-services/proprietaire.service'
import {ClasseStandardService} from 'src/app/services/classeStandard-service/classe-standard.service'
import {AdresseServiceService} from 'src/app/services/adresse-service/adresse-service.service'
import { Adresse } from 'src/app/modeles/adresse-modele/adresse.modele';


@Component({
  selector: 'app-save-bien-achat',
  templateUrl: './save-bien-achat.component.html',
  styleUrls: ['./save-bien-achat.component.css']
})
export class SaveBienAchatComponent implements OnInit {
//============= PROPS ===========================//
bienImmoAchat:BienAAcheter={idBien:null,
  statut:null,
  dateSoumissionAgence:null,
  revenuCadastral:null,
  dateMiseADisposition:null,
  photo:null,
  typeBien:null,
  utilisation:null,
  superficie:null,
  proprietaire:null,
  classeStandard:null,
  adresse:{idAdresse:null,
         rue:null,
         codePostal:null,
         localite:null 
  },
  etat:null,
  prix:null};

  listeProprietairesBdd=[]
  listeClasseStandard=[]

  //============= CTOR ===========================//
  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute, 
    private bienservice:BienImmobilierService , 
    private proprietaireService:ProprietaireService,
    private classeService:ClasseStandardService,
    private adresseService:AdresseServiceService) { }


  //============= METHODE INIT ===========================//
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");

        console.log(id);
        this.findBienAchatById(id);
      }
    )
  }

 //============= METHODES ===========================// 


 async findBienAchatById(id:number){
   console.log("in findBienAchatById")

  this.listeProprietairesBdd= await this.getListeroprietaires().toPromise()
  this.listeClasseStandard= await this.getListeClassesStandard().toPromise()

   if(id!=0){
    this.bienservice.findBienAAcheterById(id).subscribe(
      (data)=> {this.bienImmoAchat=data}
    )
   }
 }

 async saveOrUpdateBienAchat(){
   console.log(this.bienImmoAchat)
  
   if(this.bienImmoAchat.idBien != null){
    const resultAdresse = await this.saveAdresse(this.bienImmoAchat.adresse).toPromise()
    //this.bienImmoAchat.adresse = await this.getAdresseById(this.bienImmoAchat.adresse.idAdresse).toPromise()
    const bien = await this.saveBienAchat(this.bienImmoAchat).toPromise()
   }else{
     // Stockage des valeurs proprietaire et classe dans des variables à part
     const proprietaire = this.bienImmoAchat.proprietaire
     const classe = this.bienImmoAchat.classeStandard

     //On met à null les proprietés proprietaire et classe
     this.bienImmoAchat.proprietaire=null
     this.bienImmoAchat.classeStandard=null

     //On ajoute le bien à la bdd
     let bien = await this.saveBienAchat(this.bienImmoAchat).toPromise()

     //On recupere le bien que l'on vient d'ajouter avec son id grâce à la liste
     let listeBienAchat = await this.getAllBiensAchat().toPromise()
     this.bienImmoAchat = listeBienAchat[listeBienAchat.length-1]

     //on réintegre les proprietés proprietaire et classe
     this.bienImmoAchat.proprietaire=proprietaire
     this.bienImmoAchat.classeStandard=classe

     //On modifie le bien 
     bien = await this.saveBienAchat(this.bienImmoAchat).toPromise()
   }
   this.router.navigate(['compte/liste-biens']);
 }

 getListeroprietaires(){
  return this.proprietaireService.getAllProprietaire()
 }

 getListeClassesStandard(){
   return this.classeService.getAllBienImmobiliersFromWsRest()
 }

 saveBienAchat(bien:BienAAcheter){
   return this.bienservice.saveBienAAchat(bien)
 }

 getAllBiensAchat(){
   return this.bienservice.getAllBienImmobiliersAAcheterFromWsRest()
 }


 getAdresseById(id:number){
   return this.adresseService.getByIdAdresseFromWsRest(id)
 }

 saveAdresse(adresse:Adresse){
   return this.adresseService.saveAdresseWithWebService(adresse)
 }
}
