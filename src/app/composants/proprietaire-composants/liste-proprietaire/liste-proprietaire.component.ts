import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-liste-proprietaire',
  templateUrl: './liste-proprietaire.component.html',
  styleUrls: ['./liste-proprietaire.component.css']
})
export class ListeProprietaireComponent implements OnInit {

   //============= PROPS ===========================//

   listeProprietaire=[];
   listeProprietaire2=[]

  constructor(private router : Router, private proprietaireService : ProprietaireService) { }

  /**
   * ngOnInit
   */
  ngOnInit(): void {

      this.getAllProprietaireWithBien();
  }

  //============= METHODES ===========================//
 

  async getAllProprietaireWithBien(){
    this.listeProprietaire = await this.getListeProprietaire().toPromise();
    var self = this;
    this.listeProprietaire.forEach(async function(c){
      try{
      c.listeBienImmobiliers= await self.getAllBienByProp(c.id).toPromise();
      
      console.log(c.listeBienImmobiliers);
      self.listeProprietaire2.push(c);
    }catch(e) {
      console.log(e);
  }
    })
    console.log(this.listeProprietaire2);
   }//end getAllProprietaire


   getAllBienByProp(id :number){
    return this.proprietaireService.getAllBiensByProprietaire(id)
    }



 getListeProprietaire(){
  return this.proprietaireService.getAllProprietaire();
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
      () => {this.listeProprietaire2.filter(prop => prop != proprietaire);}
    );

  }//end deleteEmploye()

  async supprimer(id:number){
    //const prop = await this.getById(id).toPromise()
    const suppr = await this.delete(id).toPromise()
    console.log(suppr)
    this.router.navigate(['/compte/liste-proprietaires']);
    console.log("proprio supprimé")
  }

  

  delete(id:number){
    return this.proprietaireService.deleteProprietaire(id)
  }

  getById(id:number){
    return this.proprietaireService.getById(id)
  }


}//end class
