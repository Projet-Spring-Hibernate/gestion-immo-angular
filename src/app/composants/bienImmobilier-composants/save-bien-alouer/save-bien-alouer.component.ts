import { Component, OnInit } from '@angular/core';
import { BienALouer } from 'src/app/modeles/bienALouer-modele/bienALouer.modele';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { Router, ActivatedRoute } from '@angular/router';


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
  adresse:null,
  caution:null,
  loyer:null,
  charges:null,
  typeBail:null,
  garniture:null};
//============= CTOR ===========================//
  constructor(private router : Router, private activatedRoute : ActivatedRoute, private bienservice:BienImmobilierService) { }


  //============= METHODE INIT ===========================//
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");
        // appel de la méthode findEmployeById() 
        console.log(id);
        this.findBienLocById(id);
      }
    )
  }

 //============= METHODES ===========================// 


 findBienLocById(id:number){
   console.log("in findBienLocById")
   if(id!=0){

    this.bienservice.findBienALouerById(id).subscribe(
      (data)=> {this.bienImmoLoc=data}
    )
   }
 }

 saveOrUpdateBienLoc(){
   console.log(this.bienImmoLoc)
   this.bienservice.saveBienALouer(this.bienImmoLoc).subscribe(
     (data) => console.log(data)

   )
 }


}
