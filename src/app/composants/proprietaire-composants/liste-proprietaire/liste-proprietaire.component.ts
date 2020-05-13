import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';

@Component({
  selector: 'app-liste-proprietaire',
  templateUrl: './liste-proprietaire.component.html',
  styleUrls: ['./liste-proprietaire.component.css']
})
export class ListeProprietaireComponent implements OnInit {

   //============= PROPS ===========================//

   listeProprietaire=[];

  constructor(private router : Router, private proprietaireService : ProprietaireService) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.proprietaireService.refreshNeeded.subscribe(

      () => {this.getAllProprietaire();}
    )
    this.getAllProprietaire();
  }

  //============= METHODES ===========================//
 
  /**
  * Recup de la liste de la liste des employes via le service
  */
 getAllProprietaire(){
  console.log("in getAllProprietaire")

  this.proprietaireService.getAllProprietaire().subscribe(
    (data) => (this.listeProprietaire=data)
  );
 }//end getAllProprietaire

 /**
   * Pemret de naviguer vers edit/id en ajoutant l'id de du proprio à cette route
   * @param id
   */
  editProprietaire(id :number){
    this.router.navigate(['compte/edit-proprietaires/', id]);

  }//End editProprietaire()

  /**
   * Permet de supprimer un proprietaire via le service
   * @param proprietaire 
   */
  deleteProprietaire(proprietaire: Proprietaire){

    /**
     * La méthode filter() retourne un noveau tableau contenant tous les éléments d'origine
     */

    // abonnement au service 
    this.proprietaireService.supprimerProprietaire(proprietaire).subscribe(
      () => {this.listeProprietaire.filter(prop => prop != proprietaire);}
    );

  }//end deleteEmploye()

}//end class
