import { Component, OnInit } from '@angular/core';
import{Conseiller} from '../../../../modeles/conseiller-modele/conseiller.modele'
import{ConseillerService} from '../../../../services/conseiller-services/conseiller.service'
import { Router, ActivatedRoute } from '@angular/router';
import{VisiteService} from '../../../../services/visite-services/visite.service'
import{ContratService} from '../../../../services/contrat-services/contrat.service'
import { Adresse } from 'src/app/modeles/adresse-modele/adresse.modele';
import {AdresseServiceService} from 'src/app/services/adresse-service/adresse-service.service'

@Component({
  selector: 'app-save-conseiller',
  templateUrl: './save-conseiller.component.html',
  styleUrls: ['./save-conseiller.component.css']
})
export class SaveConseillerComponent implements OnInit {
//============= PROPS ===========================//

  conseiller: Conseiller = {
    motDePasse:null,
    email:null,
    id:null,
    nom:null,
    telephonePerso:null,
    telephonePro:null,
    adresse:{idAdresse:null,
      rue:null,
      codePostal:null,
      localite:null 
},
    contrats:[],
    visites :[]
  }

  listeContrats=[]
  listeVisite=[]
  
//============= CTOR ===========================//

  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute, 
    private conseillerservice:ConseillerService , 
    private contartService:ContratService,
    private adresseService:AdresseServiceService,
    private visiteService:VisiteService) { }
 
 
    //============= METHODE INIT ===========================//

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");
        // appel de la méthode findEmployeById() 
        console.log(id);
        this.findConseillerById(id);
      }
    )
  }

   //============= METHODES ===========================// 
   async findConseillerById(id:number){
    console.log("in findBienLocById")
 
   this.listeContrats= await this.getListeContart().toPromise();
   this.listeVisite= await this.getListeVisite().toPromise()
 
    if(id!=0){
     this.conseillerservice.getById(id).subscribe(
       (data)=> {this.conseiller=data}
     )
    }
  }
 
  async saveOrUpdateConseiller(){
    console.log(this.conseiller)
   
    if(this.conseiller.id != null){
      const resultAdresse = await this.saveAdresse(this.conseiller.adresse).toPromise()
     const cons = await this.saveConseiller(this.conseiller).toPromise()
    }else{
      // Stockage des valeurs proprietaire et classe dans des variables à part
      const visit = this.conseiller.visites
      const contra = this.conseiller.contrats
 
      //On met à null les proprietés proprietaire et classe
      this.conseiller.visites=null
      this.conseiller.contrats=null
 
      //On ajoute le bien à la bdd
      const cons2 = await this.saveConseiller(this.conseiller).toPromise()
 
      //On recupere le bien que l'on vient d'ajouter avec son id grâce à la liste
      const listeConseiller = await this.getAllConseiller().toPromise()
      this.conseiller = listeConseiller[listeConseiller.length-1]
 
      //on réintegre les proprietés proprietaire et classe
      this.conseiller.visites=visit
      this.conseiller.contrats=contra
 
      //On modifie le bien 
      const cons3 = await this.saveConseiller(this.conseiller).toPromise()    }
    this.router.navigate(['compte/liste-conseillers']);
  }
 
  getListeVisite(){
   return this.visiteService.getAllVisiteFromWsRest()
  }
 
  getListeContart(){
    return this.contartService.getAllContratFromWsRest();
  }
 
  saveConseiller(conseiller:Conseiller){
    return this.conseillerservice.saveConseiller(conseiller);
  }
 
  getAllConseiller(){
    return this.conseillerservice.getAllConseillerFromWsRest();
  }
  saveAdresse(adresse:Adresse){
    return this.adresseService.saveAdresseWithWebService(adresse)
  }
}
