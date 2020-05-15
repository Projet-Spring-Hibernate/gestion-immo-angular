import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{Conseiller} from '../../../../modeles/conseiller-modele/conseiller.modele'
import{Visite} from '../../../../modeles/visite-modele/visite.modele'
import{Contrat} from '../../../../modeles/contrat-modele/contrat.modele'
import { from } from 'rxjs';
import { ConseillerService } from 'src/app/services/conseiller-services/conseiller.service';
@Component({
  selector: 'app-affichage-conseiller',
  templateUrl: './affichage-conseiller.component.html',
  styleUrls: ['./affichage-conseiller.component.css']
})
export class AffichageConseillerComponent implements OnInit {


    //============= PROPS ===========================//
  id : number;
  conseiller: Conseiller = {
    motDePasse:null,
    email:null,
    id:null,
    nom:null,
    telephonePerso:null,
    telephonePro:null,
   adresse:null,
    contrats:[],
    visites :[]
  }
  
 
  

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private conseillerservice : ConseillerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route  de app-routing.module.ts)
        this.id = +parameterMap.get("id");
      })

      this.getById();
  }

async getById(){
this.conseiller= await this.getConseiller(this.id).toPromise()
this.conseiller.visites = await this.getVisite(this.id).toPromise();
this.conseiller.contrats = await this.getContrat(this.id).toPromise();
console.log(this.conseiller)
}

getConseiller(id:number){
return this.conseillerservice.getById(id)
}

getVisite(id:number){
  return this.conseillerservice.getAllVisitebyConseillerFromWsRest(id);
}

getContrat(id:number){
  return this.conseillerservice.getAllConseillerbyContratFromWsRest(id);
}


delete(id:number){
  return this.conseillerservice.deleteConseiller(id);
}
async modifier(id:number){

    this.router.navigate(['compte/save-conseillers/'+id]);
  
  
}

async supprimer(id:number){

  const suppr = await this.delete(id).toPromise()
  console.log(suppr)
  this.router.navigate(['/compte/liste-conseillers']);
  console.log("conseiller supprimer")
}
}
