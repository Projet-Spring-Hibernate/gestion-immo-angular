import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ClientService} from 'src/app/services/client-service/client.service'
import {Client} from 'src/app/modeles/client-modele/client.modele'
import {AdresseServiceService} from 'src/app/services/adresse-service/adresse-service.service'
import { Adresse } from 'src/app/modeles/adresse-modele/adresse.modele';

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.css']
})
export class SaveClientComponent implements OnInit {

  //============= PROPS ===========================//
  client:Client = {
  id : null,
  nom: null,
  telephonePerso: null,
  telephonePro: null,
  adresse:{idAdresse:null,
    rue:null,
    codePostal:null,
    localite:null 
}
}


  //============= CTOR ===========================//
  constructor(private router : Router, 
    private activatedRoute : ActivatedRoute, 
    private clientService:ClientService,
    private adresseService:AdresseServiceService) { }

  //============= METHODE INIT ===========================//
  ngOnInit(): void {
    console.log("in ngOnInit")
    this.activatedRoute.paramMap.subscribe(
      (parameterMap)=>{
        //recup du param id de l'url (ref : route edit/:id de app-routing.module.ts)
        const id = +parameterMap.get("id");
        console.log(id);
        this.findClientById(id)
      }
    )
  }

   //============= METHODES ===========================// 
   async findClientById(id:number){
    console.log("In findClientById")

    if(id!=0){
      this.clientService.getByIdClientFromWsRest(id).subscribe(
        (data)=> {this.client=data}
      )
    }
}

async saveOrUpdateClient(){
  console.log(this.client)

  if(this.client.id != null){
    const resultAdresse = await this.saveAdresse(this.client.adresse).toPromise()
    const result = await this.saveClient(this.client).toPromise()
  }else{

   //On ajoute le client à la bdd sans liaisons
   const result2 = await this.saveClient(this.client).toPromise()
  }
}


saveClient(client:Client){
  return this.clientService.saveClientWithWsRest(client)
}

saveAdresse(adresse:Adresse){
  return this.adresseService.saveAdresseWithWebService(adresse)
}
}
