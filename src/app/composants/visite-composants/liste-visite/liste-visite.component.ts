import { Component, OnInit } from '@angular/core';
import { VisiteService } from 'src/app/services/visite-services/visite.service';
import { Router } from '@angular/router';
import { Visite } from 'src/app/modeles/visite-modele/visite.modele';

@Component({
  selector: 'app-liste-visite',
  templateUrl: './liste-visite.component.html',
  styleUrls: ['./liste-visite.component.css']
})
export class ListeVisiteComponent implements OnInit {

  listeVisite=[];

  constructor(private router : Router, private visiteService : VisiteService) { }

  ngOnInit(): void {
    this.getAllVisite();
  }
  getAllVisite(){
    console.log("in getAllVisite");
    this.visiteService.getAllVisiteFromWsRest().subscribe(
      data=>this.listeVisite=data
    )
  }

  modifier(id :number){
    this.router.navigate(['compte/save-visite/', id]);
  }

  async supprimer(id:number){
    //const prop = await this.getById(id).toPromise()
    const suppr = await this.delete(id).toPromise()
    console.log(suppr)
    this.router.navigate(['/compte/liste-visites']);
    console.log("visite supprimée")
  }

  

  delete(id:number){
    return this.visiteService.deleteVisiteWithWsRest(id)
  }

  getById(id:number){
    return this.visiteService.getByIdVisiteFromWsRest(id)
  }
}
