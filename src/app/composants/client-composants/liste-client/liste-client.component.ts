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


  constructor(private router : Router, private clientService : ClientService) { }

  ngOnInit(): void {
    this.getAllClient();

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



 modifier(id:number){
  this.router.navigate(['compte/save-client/'+id]);
}

async supprimer(id:number){
  console.log("dans la fonction supprimer")
  const suppr = await this.delete(id).toPromise()

  this.getAllClient();
  //this.router.navigate(['/compte/liste-client']);
  console.log(suppr)
}
delete(id:number){
  return this.clientService.deleteClientWithWsRest(id)
}
}
