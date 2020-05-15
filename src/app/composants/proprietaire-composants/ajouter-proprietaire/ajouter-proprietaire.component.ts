import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';
import { BienImmobilierService } from 'src/app/services/bienImmobilier-services/bien-immobilier.service';
import { AdresseServiceService } from 'src/app/services/adresse-service/adresse-service.service';
import { Adresse } from 'src/app/modeles/adresse-modele/adresse.modele';

@Component({
  selector: 'app-ajouter-proprietaire',
  templateUrl: './ajouter-proprietaire.component.html',
  styleUrls: ['./ajouter-proprietaire.component.css']
})
export class AjouterProprietaireComponent implements OnInit {

  /*============== PROPS ==================== */
  proprietaire : Proprietaire = {id:null, nom:null, telephonePerso:null, telephonePro:null, listeBienImmobiliers:null, adresse:{idAdresse:null,
    rue:null,
    codePostal:null,
    localite:null 
}}

listeBiensBdd=[]

  /**
   * CTOR
   * @param router 
   * @param proprietaireService 
   * @param activatedRoute 
   */
  constructor(private router : Router, private proprietaireService : ProprietaireService, 
              private activatedRoute :ActivatedRoute, private bienService:BienImmobilierService,
              private adresseService:AdresseServiceService) { }

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

 

  async saveOrUpdateProprietaire() {

      //--------nouveau proprio--------------//
      const resultAdresse = await this.saveAdresse(this.proprietaire.adresse).toPromise()
      this.proprietaireService.ajouterProprietaire(this.proprietaire).subscribe(
        (data) => {console.log(data);
        }
      );

      
      this.router.navigate(['compte/liste-proprietaires']);
      
    
  }//end saveOrUpdateProprietaire()



  
 

 

  /**
   * 
   * @param id 
   */
  async findProprietaireById(id:number){
    this.listeBiensBdd=await this.getAllBiensImmos().toPromise()
    if (id != 0) {
      //modif
      //-> findEmployeById renvoit le proprio à modifier
      this.proprietaireService.getById(id).subscribe(
        (data) => {this.proprietaire= data}
      );

    }//end else
    
  }//end findProprietaireById()

  
 

 

  getAllBiensImmos(){
    return this.bienService.getAllBienImmobiliersFromWsRest()
  }

  getAllProprietaire(){
    return this.proprietaireService.getAllProprietaire()
  }

  saveProprietaire(proprietaire:Proprietaire){
    return this.proprietaireService.ajouterProprietaire(proprietaire)
  }

  getAdresseById(id:number){
    return this.adresseService.getByIdAdresseFromWsRest(id)
  }
 
  saveAdresse(adresse:Adresse){
    return this.adresseService.saveAdresseWithWebService(adresse)
  }
  


 
  

}//end class
