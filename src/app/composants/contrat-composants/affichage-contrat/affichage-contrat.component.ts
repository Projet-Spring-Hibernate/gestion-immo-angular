import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ContratService} from 'src/app/services/contrat-services/contrat.service'
import{Contrat} from 'src/app/modeles/contrat-modele/contrat.modele'
import { BienImmobilier } from 'src/app/modeles/bienImmobilier-modele/bienImmobilier.modele';
import { Client } from 'src/app/modeles/client-modele/client.modele';
import { Conseiller } from 'src/app/modeles/conseiller-modele/conseiller.modele';


@Component({
  selector: 'app-affichage-contrat',
  templateUrl: './affichage-contrat.component.html',
  styleUrls: ['./affichage-contrat.component.css']
})
export class AffichageContratComponent implements OnInit {
   
  //============= PROPS ===========================//
  id : number;
  contrat: Contrat = {
    idContrat:null,
    prix:null,
    date:null,
    numeroRef:null,
    bienImmobilier:{
      idBien:null,
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
    },
    client:{   id:null,
      nom:null,
      telephonePerso:null,
      telephonePro:null,
      adresse:null,
      listeClasseStandard:[],
      listeContrats:[],
      listeVisites:[],
    },
    conseiller:{
      motDePasse:null,
      email:null,
      id:null,
      nom:null,
      telephonePerso:null,
      telephonePro:null,
      adresse:null,
      contrats:[],
      visites :[],
    }
  }


  constructor(private router : Router, private activatedRoute : ActivatedRoute, private contratservice : ContratService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        this.id = +parameterMap.get("id");
      })
    console.log(this.id)
      this.findContrat(this.id)
  }

  async findContrat(id:number){
    console.log("in getClientById")
    this.contrat=await this.getContratById(id).toPromise()
  
    
  }
  
  modifier(id:number){
    this.router.navigate(['compte/save-contrat/'+id]);
  }
  
  async supprimer(id:number){
    console.log("dans la fonction supprimer")
    const suppr = await this.delete(id).toPromise()
  
    //this.router.navigate(['/compte/liste-client']);
    console.log(suppr)
  }
  delete(id:number){
    return this.contratservice.deleteContratWithWsRest(id)
  }
  
  
  getContratById(id:number){
    return this.contratservice.getByIdContratFromWsRest(id)
  }
  
}
