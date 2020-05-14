import { Component, OnInit } from '@angular/core';
import { BienALouer } from 'src/app/modeles/bienALouer-modele/bienALouer.modele';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ProprietaireService} from 'src/app/services/proprietaire-services/proprietaire.service'
import {ClasseStandardService} from 'src/app/services/classeStandard-service/classe-standard.service'

@Component({
  selector: 'app-save-bien-alouer',
  templateUrl: './save-bien-alouer.component.html',
  styleUrls: ['./save-bien-alouer.component.css']
})
export class SaveBienALouerComponent implements OnInit {
//============= PROPS ===========================//
bienImmoLoc:BienALouer={idBien:null,
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
  caution:null,
  loyer:null,
  charges:null,
  typeBail:null,
  garniture:null};

  listeProprietairesBdd=[]
  listeClasseStandard=[]

//============= CTOR ===========================//
  constructor(private router : Router, 
              private activatedRoute : ActivatedRoute, 
              private bienservice:BienImmobilierService , 
              private proprietaireService:ProprietaireService,
              private classeService:ClasseStandardService) { }


  //============= METHODE INIT ===========================//
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");
        console.log(id);
        this.findBienLocById(id);
      }
    )
  }

 //============= METHODES ===========================// 


 async findBienLocById(id:number){
   console.log("in findBienLocById")

  this.listeProprietairesBdd= await this.getListeroprietaires().toPromise()
  this.listeClasseStandard= await this.getListeClassesStandard().toPromise()

   if(id!=0){
    this.bienservice.findBienALouerById(id).subscribe(
      (data)=> {this.bienImmoLoc=data}
    )
   }
 }

 async saveOrUpdateBienLoc(){
   console.log(this.bienImmoLoc)
  
   if(this.bienImmoLoc.idBien != null){
    const bien = await this.saveBienLoc(this.bienImmoLoc).toPromise()
   }else{
     // Stockage des valeurs proprietaire et classe dans des variables à part
     const proprietaire = this.bienImmoLoc.proprietaire
     const classe = this.bienImmoLoc.classeStandard

     //On met à null les proprietés proprietaire et classe
     this.bienImmoLoc.proprietaire=null
     this.bienImmoLoc.classeStandard=null

     //On ajoute le bien à la bdd
     let bien = await this.saveBienLoc(this.bienImmoLoc).toPromise()

     //On recupere le bien que l'on vient d'ajouter avec son id grâce à la liste
     let listeBienLoc = await this.getAllBiensLoc().toPromise()
     this.bienImmoLoc = listeBienLoc[listeBienLoc.length-1]

     //on réintegre les proprietés proprietaire et classe
     this.bienImmoLoc.proprietaire=proprietaire
     this.bienImmoLoc.classeStandard=classe

     //On modifie le bien 
     bien = await this.saveBienLoc(this.bienImmoLoc).toPromise()
   }
   this.router.navigate(['compte/liste-biens']);
 }

 getListeroprietaires(){
  return this.proprietaireService.getAllProprietaire()
 }

 getListeClassesStandard(){
   return this.classeService.getAllBienImmobiliersFromWsRest()
 }

 saveBienLoc(bien:BienALouer){
   return this.bienservice.saveBienALouer(bien)
 }

 getAllBiensLoc(){
   return this.bienservice.getAllBienImmobiliersALouerFromWsRest()
 }
}
