import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { BienImmobilier } from 'src/app/modeles/bienImmobilier-modele/bienImmobilier.modele';
import {NavbarVitrineComponent} from '../../../navbar-vitrine/navbar-vitrine.component';


@Component({
  selector: 'app-liste-bien-immobiliers',
  templateUrl: './liste-bien-immobiliers.component.html',
  styleUrls: ['./liste-bien-immobiliers.component.css']
})



export class ListeBienImmobiliersComponent implements OnInit {

  //============= PROPS ===========================//

  listeBienImmobiliers=[];
  listeTemporaire=[];
  listeTemporaire2=[];
  filtres={ location:true,
            vente:true,
            disponible:true,
            indisponible:true,
            commercial:true,
            habitation:true
            }

  //============= CTOR ===========================//
  
    /**
   * Ctor du composant
   * -> injection du service EmployeService comme dependance
   * -> Injection du router pour la naviagation
   */
  constructor(private router : Router, private bienImmobilierService : BienImmobilierService) { }
  //constructor(private router : Router) { }


   //============= METHODE INIT ===========================//
  /**
  * appel de la méthode getAllBienImmobiliers() à l'initialisation du composant
  */
  ngOnInit(): void {
      this.getAllBienImmobiliers();

  }


  //============= METHODES ===========================//
 
  /**
  * Recup de la liste de la liste des employes via le service
  */
  async getAllBienImmobiliers(){
    console.log("in getAllBienImmobiliers")
    //============ Premier filtre : location, vente ou les deux ? ==========//

    if (this.filtres.location==true && this.filtres.vente==true) {
      console.log("both")
       //abonnement au service
      /*this.bienImmobilierService.getAllBienImmobiliersFromWsRest().subscribe(
      data => this.listeTemporaire =data
      );*/
      this.listeTemporaire=await this.getAllBiens().toPromise()
    } else {
      if (this.filtres.location==true) {
        //abonnement au service
        /*this.bienImmobilierService.getAllBienImmobiliersALouerFromWsRest().subscribe(
          data => this.listeTemporaire =data
          );*/
          this.listeTemporaire=await this.getAllBiensLoc().toPromise()
      } //end if
      if(this.filtres.vente==true) {
        //abonnement au service
        /*this.bienImmobilierService.getAllBienImmobiliersAAcheterFromWsRest().subscribe(
          data => this.listeTemporaire =data
          );*/
          this.listeTemporaire=await this.getAllBiensAchat().toPromise()
      }//end if
             
    }//End else
    
    console.log(this.listeTemporaire)

    //============ Deuxieme filtre : disponible, indisponible ou les deux ? ==========//

    if (this.filtres.disponible==true && this.filtres.indisponible==true) {
      console.log("both")
      this.listeTemporaire2=this.listeTemporaire;
    } else {
      if (this.filtres.disponible==true) {
        this.listeTemporaire2=this.listeTemporaire.filter(
          val => val.statut === "disponible");
      }
      if (this.filtres.indisponible==true) {
        this.listeTemporaire2=this.listeTemporaire.filter(
          val => val.statut === "indisponible");
      }
    }//End if 
    console.log(this.listeTemporaire2)

        
    //============ Troisieme filtre : commerciale, habitation ou les deux ? ==========//
      if (this.filtres.commercial==true && this.filtres.habitation==true) {
        this.listeBienImmobiliers=this.listeTemporaire2;
      } else {
        if (this.filtres.habitation==true) {
           this.listeBienImmobiliers=this.listeTemporaire2.filter(
            val => val.utilisation === "habitation");
        }
        if (this.filtres.commercial==true) {
          this.listeBienImmobiliers=this.listeTemporaire2.filter(
            val => val.utilisation === "commercial");
        }
      }//End if 
    
      console.log(this.listeBienImmobiliers)
  }//end getAllBienImmobiliers


  getAllBiens(){
    return this.bienImmobilierService.getAllBienImmobiliersFromWsRest();
  }

  getAllBiensAchat(){
    return this.bienImmobilierService.getAllBienImmobiliersAAcheterFromWsRest();
  }

  getAllBiensLoc(){
    return this.bienImmobilierService.getAllBienImmobiliersALouerFromWsRest();
  }
}//end class
