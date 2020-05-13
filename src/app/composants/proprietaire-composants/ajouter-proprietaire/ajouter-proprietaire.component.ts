import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';

@Component({
  selector: 'app-ajouter-proprietaire',
  templateUrl: './ajouter-proprietaire.component.html',
  styleUrls: ['./ajouter-proprietaire.component.css']
})
export class AjouterProprietaireComponent implements OnInit {

  /*============== PROPS ==================== */
  proprietaire : Proprietaire = {id:null, nom:null, telephonePerso:null, telephonePro:null, adresse:null}

  /**
   * CTOR
   * @param router 
   * @param proprietaireService 
   * @param activatedRoute 
   */
  constructor(private router : Router, private proprietaireService : ProprietaireService, private activatedRoute :ActivatedRoute) { }

  /*============== METHODES ====================== */
  /**
   * RECUP de l'id du proprio à modifier
   */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap) => {
        const id = +parameterMap.get("id");
        this.findProprietaireById(id);
      }
    );

  }//end ngOnInit

  saveOrUpdateProprietaire() {
    if (this.proprietaire.id == null) {

      //--------nouveau proprio--------------//
      this.proprietaireService.ajouterProprietaire(this.proprietaire).subscribe(
        (data) => {console.log(data);
        }
      );
      
    }else{
      //--------modification proprio existant--------------//
      this.proprietaireService.modifierProprietaire(this.proprietaire).subscribe();

    }//end else
    // redirection vers la liste des propriétaire via la route /list
    this.router.navigate(['compte/liste-proprietaires']);
  }//end saveOrUpdateProprietaire()

  /**
   * 
   * @param id 
   */
  findProprietaireById(id:number){
    if (id == 0) {
      //ajout
      this.proprietaire = {id:null, nom:null, telephonePerso:null, telephonePro:null, adresse:null}
    }else {
      //modif
      //-> findEmployeById renvoit le proprio à modifier
      this.proprietaireService.findProprietaireById(id).subscribe(
        (proprietaireModif) => {this.proprietaire= proprietaireModif}
      );

    }//end else
  }//end findProprietaireById()

}//end class
