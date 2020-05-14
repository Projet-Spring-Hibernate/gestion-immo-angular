import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//========== Composants statiques vitrine =========================//
import { HomeComponent } from './home/home.component';
import { InfoVenteLocationComponent } from './info-vente-location/info-vente-location.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfosContactComponent } from './infos-contact/infos-contact.component';


//========= Biens =========================//
import { ListeBienImmobiliersComponent } from './composants/bienImmobilier-composants/liste-bien-immobiliers/liste-bien-immobiliers.component';
import { AffichageBienVitrineComponent } from './composants/bienImmobilier-composants/affichage-bien-vitrine/affichage-bien-vitrine.component';
import {AffichageBienConseillerComponent} from './composants/bienImmobilier-composants/affichage-bien-conseiller/affichage-bien-conseiller.component'
import {ListeBiensImmobilierListeConseillerComponent} from './composants/bienImmobilier-composants/liste-biens-immobilier-liste-conseiller/liste-biens-immobilier-liste-conseiller.component'
import {SaveBienALouerComponent} from './composants/bienImmobilier-composants/save-bien-alouer/save-bien-alouer.component'
import {SaveBienAchatComponent} from './composants/bienImmobilier-composants/save-bien-achat/save-bien-achat.component'



//======== Clients ===========//
import { ListeClientComponent } from './composants/client-composants/liste-client/liste-client.component';
import { AffichageClientComponent } from './composants/client-composants/affichage-client/affichage-client.component';


//======= Visites ============//
import { ListeVisiteComponent } from './composants/visite-composants/liste-visite/liste-visite.component';

//======= Contrats ============//
import { ListeContratComponent } from './composants/contrat-composants/liste-contrat/liste-contrat.component';

//======= Propriétaires ============//
import { ListeProprietaireComponent } from './composants/proprietaire-composants/liste-proprietaire/liste-proprietaire.component';
import { AffichageProprietaireComponent } from './composants/proprietaire-composants/affichage-proprietaire/affichage-proprietaire.component';
import { AjouterProprietaireComponent } from './composants/proprietaire-composants/ajouter-proprietaire/ajouter-proprietaire.component';

//======= Conseillers ============//
import { ListeConseillerComponent } from './composants/conseiller-composants/liste-conseiller/liste-conseillers/liste-conseiller.component';
import {AffichageConseillerComponent} from './composants/conseiller-composants/affichage-conseiller/affichage-conseiller/affichage-conseiller.component';


const routes: Routes = [  {path:"", redirectTo:"home", pathMatch:'full'}, //route par defaut - redirection
{path:'home', component: HomeComponent},
{path:'infoLocationVente', component: InfoVenteLocationComponent},
{path:'InfosContact', component: InfosContactComponent},
{path:'AboutUs', component: AboutUsComponent},

{path:'listeBienImmobiliers', component: ListeBienImmobiliersComponent},
{path:'affichageBienVitrine/:id', component: AffichageBienVitrineComponent},

{path:'compte/liste-biens', component: ListeBiensImmobilierListeConseillerComponent},
{path:'compte/affichage-bien/:id', component: AffichageBienConseillerComponent},
{path:'compte/save-bienALouer/:id', component: SaveBienALouerComponent},
{path:'compte/save-bienAchat/:id', component: SaveBienAchatComponent},

{path:'compte/liste-client', component: ListeClientComponent},
{path:'compte/affichage-client/:id', component: AffichageClientComponent},

{path:'compte/liste-visites', component: ListeVisiteComponent},

{path:'compte/liste-contrats', component: ListeContratComponent},

{path:'compte/liste-proprietaires', component: ListeProprietaireComponent},
{path:'compte/affichage-proprietaire/:id', component: AffichageProprietaireComponent},
{path:'compte/edit-proprietaires/:id', component: AjouterProprietaireComponent},


{path:'compte/liste-conseillers', component: ListeConseillerComponent},
{path:'compte/affichageconseiller/:id', component: AffichageConseillerComponent},



{path:"*", component:HomeComponent} //route attrape-tout => si l'url ne correspond à aucune routes definies au dessus, on redirige vers home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
