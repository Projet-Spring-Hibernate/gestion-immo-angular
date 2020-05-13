import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client-service/client.service';


@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

   //============= PROPS ===========================//

   listeClient=[];
   listeClasseStandard=[];

  constructor(private router : Router, private clientService : ClientService) { }

  ngOnInit(): void {
    this.getAllClient();
    this.getAllClasseStandard();
  }

  //============= METHODES ===========================//
 
  /**
  * Recup de la liste de la liste des clients via le service
  */
 getAllClient(){
  console.log("in getAllClient")
  this.clientService.getAllClientFromWsRest().subscribe(
    data =>  this.listeClient=data
  )
 }

 getAllClasseStandard(){
  console.log("in getAllClasseStandard")
  this.clientService.getAllClientFromWsRest().subscribe(
    data =>  this.listeClasseStandard=data
  )
 }

}
