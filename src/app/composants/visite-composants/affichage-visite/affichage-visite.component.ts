import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VisiteService } from 'src/app/services/visite-services/visite.service';
import { Visite } from 'src/app/modeles/visite-modele/visite.modele';

@Component({
  selector: 'app-affichage-visite',
  templateUrl: './affichage-visite.component.html',
  styleUrls: ['./affichage-visite.component.css']
})
export class AffichageVisiteComponent implements OnInit {

  constructor(private router : Router, private visiteService : VisiteService, private activatedRoute: ActivatedRoute) { }


  /*============== PROPS ==================== */
  visite : Visite = {idVisite:null,
    dateDeVisite:null,
    heureDeVisite:null,
    bienImmobilier:null,
    client:null,
    conseiller:null}
  id : number


  /*============== METHODES ==================== */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route  de app-routing.module.ts)
        this.id = +parameterMap.get("id");
      })

      this.getById();
  }

  async getById(){
    this.visite= await this.getVisite(this.id).toPromise()
    console.log(this.visite)
    }

  getVisite(id:number){
    return this.visiteService.getByIdVisiteFromWsRest(id)
  }

  editVisite(id :number){
    this.router.navigate(['compte/save-visite/', id]);

  }//End editProprietaire()


  async supprimer(id:number){
    const suppr = await this.delete(id).toPromise()
    console.log(suppr)
    this.router.navigate(['compte/liste-visites']);
    console.log("proprio supprimé")
  }

  delete(id:number){
    return this.visiteService.deleteVisiteWithWsRest(id)
  }

  

}
