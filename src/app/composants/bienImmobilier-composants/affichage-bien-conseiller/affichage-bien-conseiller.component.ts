import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { BienImmobilier } from 'src/app/modeles/bienImmobilier-modele/bienImmobilier.modele';
import {  TypeBien} from 'src/app/modeles/typeBien-modele/typeBien.modele';
import { BienAAcheter } from 'src/app/modeles/bienAAcheter-modele/bienAAcheter.modele';
import { BienALouer } from 'src/app/modeles/bienALouer-modele/bienALouer.modele';

@Component({
  selector: 'app-affichage-bien-conseiller',
  templateUrl: './affichage-bien-conseiller.component.html',
  styleUrls: ['./affichage-bien-conseiller.component.css']
})
export class AffichageBienConseillerComponent implements OnInit {
 //============= PROPS ===========================//
 type:TypeBien={typeBien:null};
 id:number;
 bienImmo:BienImmobilier={idBien:null,
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
   adresse:null};

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
   adresse:null,
   etat:null,
   prix:null};

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
     adresse:null,
     caution:null,
     loyer:null,
     charges:null,
     typeBail:null,
     garniture:null};
 
 
 //============= CTOR ===========================//
 
   /**
  * Ctor du composant
  * -> injection du service comme dependance
  * -> Injection du router pour la naviagation
  */
 constructor(private router : Router, private activatedRoute : ActivatedRoute, private bienImmobilierService : BienImmobilierService) { }

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

  // this.getTypeBien();
   this.getBien();

 }


 getTypeBien(id:number){
   return this.bienImmobilierService.findTypeBienById(this.id)
 }


 async getBien(){
   this.type = await this.getTypeBien(this.id).toPromise()

   if (this.type.typeBien == "achat") {
     console.log("achat")
     this.bienImmobilierService.findBienAAcheterById(this.id).subscribe(
       data=> this.bienImmoAchat = data
     )

     
   }else{
   if(this.type.typeBien=="location"){
     console.log("location")
     this.bienImmobilierService.findBienALouerById(this.id).subscribe(
       data=> this.bienImmoLoc = data
     )
   }else{
     console.log("pas chargé")
   }

 }
 }

 async modifier(id:number){
  const type = await this.getTypeBien(id).toPromise()

  if (type.typeBien=="location") {
    this.router.navigate(['compte/save-bienALouer/'+id]);
  }else{
    this.router.navigate(['compte/save-bienAchat/'+id]);
  }
  
}

async supprimer(id:number){
  const type = await this.getTypeBien(id).toPromise()
  console.log(type.typeBien)
  const suppr = await this.delete(id).toPromise()
  console.log(suppr)
  this.router.navigate(['/compte/liste-biens']);
  console.log("bien supprimer")
}


delete(id:number){
  return this.bienImmobilierService.deleteBien(id)
}

}
