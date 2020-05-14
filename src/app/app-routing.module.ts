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
import {SaveVisiteComponent} from './composants/visite-composants/save-visite/save-visite.component'

//======= Contrats ============//
import { ListeContratComponent } from './composants/contrat-composants/liste-contrat/liste-contrat.component';

//======= Propriétaires ============//
import { ListeProprietaireComponent } from './composants/proprietaire-composants/liste-proprietaire/liste-proprietaire.component';
import { AffichageProprietaireComponent } from './composants/proprietaire-composants/affichage-proprietaire/affichage-proprietaire.component';
import { AjouterProprietaireComponent } from './composants/proprietaire-composants/ajouter-proprietaire/ajouter-proprietaire.component';

//======= Conseillers ============//
import { ListeConseillerComponent } from './composants/conseiller-composants/liste-conseiller/liste-conseillers/liste-conseiller.component';
import {AffichageConseillerComponent} from './composants/conseiller-composants/affichage-conseiller/affichage-conseiller/affichage-conseiller.component';


//======= Login =================//
import {LoginComponent} from 'src/app/login/login.component'
import { LogoutComponent } from './logout/logout.component';

//=========== AuthGaurd
import { AuthGaurdService } from './services/authGaurd-service/auth-gaurd-service.service';
import { SaveContratComponent } from './composants/contrat-composants/save-contrat/save-contrat.component';

const routes: Routes = [  {path:"", redirectTo:"home", pathMatch:'full'}, //route par defaut - redirection
{path:'home', component: HomeComponent},
{path:'infoLocationVente', component: InfoVenteLocationComponent},
{path:'InfosContact', component: InfosContactComponent},
{path:'AboutUs', component: AboutUsComponent},

{path:'listeBienImmobiliers', component: ListeBienImmobiliersComponent},
{path:'affichageBienVitrine/:id', component: AffichageBienVitrineComponent},

{path:'compte/liste-biens', component: ListeBiensImmobilierListeConseillerComponent,canActivate:[AuthGaurdService]},
{path:'compte/affichage-bien/:id', component: AffichageBienConseillerComponent,canActivate:[AuthGaurdService]},
{path:'compte/save-bienALouer/:id', component: SaveBienALouerComponent,canActivate:[AuthGaurdService]},
{path:'compte/save-bienAchat/:id', component: SaveBienAchatComponent,canActivate:[AuthGaurdService]},

{path:'compte/liste-client', component: ListeClientComponent,canActivate:[AuthGaurdService]},
{path:'compte/affichage-client/:id', component: AffichageClientComponent,canActivate:[AuthGaurdService]},

{path:'compte/liste-visites', component: ListeVisiteComponent,canActivate:[AuthGaurdService]},
{path:'compte/save-visite/:id', component: SaveVisiteComponent,canActivate:[AuthGaurdService]},

{path:'compte/liste-contrats', component: ListeContratComponent,canActivate:[AuthGaurdService]},
{path:'compte/save-contrat/:id', component: SaveContratComponent},

{path:'compte/liste-proprietaires', component: ListeProprietaireComponent,canActivate:[AuthGaurdService]},
{path:'compte/affichage-proprietaire/:id', component: AffichageProprietaireComponent,canActivate:[AuthGaurdService]},
{path:'compte/edit-proprietaires/:id', component: AjouterProprietaireComponent,canActivate:[AuthGaurdService]},


{path:'compte/liste-conseillers', component: ListeConseillerComponent,canActivate:[AuthGaurdService]},
{path:'compte/affichageconseiller/:id', component: AffichageConseillerComponent,canActivate:[AuthGaurdService]},

{path:'login', component: LoginComponent},
{path:'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},

{path:"*", component:HomeComponent} //route attrape-tout => si l'url ne correspond à aucune routes definies au dessus, on redirige vers home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
