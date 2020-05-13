import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProprietaireService } from 'src/app/services/proprietaire-services/proprietaire.service';

@Component({
  selector: 'app-affichage-proprietaire',
  templateUrl: './affichage-proprietaire.component.html',
  styleUrls: ['./affichage-proprietaire.component.css']
})
export class AffichageProprietaireComponent implements OnInit {

  /*============== PROPS ==================== */
  id:number;
  nom:null;
  telephonePerso:null;
  telephonePro:null;
  adresse:null;

  constructor(private router : Router, private proprietaireService : ProprietaireService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
  }

}
