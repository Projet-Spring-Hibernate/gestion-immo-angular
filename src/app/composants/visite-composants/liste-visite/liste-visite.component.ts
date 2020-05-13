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
}
