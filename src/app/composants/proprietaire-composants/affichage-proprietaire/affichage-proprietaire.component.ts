import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';

@Component({
  selector: 'app-affichage-proprietaire',
  templateUrl: './affichage-proprietaire.component.html',
  styleUrls: ['./affichage-proprietaire.component.css']
})
export class AffichageProprietaireComponent implements OnInit {

 
 /*============== PROPS ==================== */
 proprietaire2 : Proprietaire = {id:null, nom:null, telephonePerso:null, telephonePro:null, adresse:null, listeBienImmobiliers:null}
 id : number;
proprietaire : Proprietaire;

  constructor(private router : Router, private proprietaireService : ProprietaireService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route  de app-routing.module.ts)
        this.id = +parameterMap.get("id");
      })

      this.getById();
  }

  
  
  async getById(){
    this.proprietaire= await this.getProprietaire(this.id).toPromise()
    this.proprietaire.listeBienImmobiliers = await this.getBien(this.id).toPromise();
    console.log(this.proprietaire)
    }

    getProprietaire(id:number){
      return this.proprietaireService.getById(id)
      }

      getBien(id:number){
        return this.proprietaireService.getAllBiensByProprietaire(id)
      }


    editProprietaire(id :number){
        this.router.navigate(['compte/edit-proprietaires/', id]);
    
      }//End editProprietaire()


      async supprimer(id:number){
        const suppr = await this.delete(id).toPromise()
        console.log(suppr)
        this.router.navigate(['/compte/liste-proprietaires']);
        console.log("proprio supprimé")
      }
    
      delete(id:number){
        return this.proprietaireService.deleteProprietaire(id)
      }
}//end class
