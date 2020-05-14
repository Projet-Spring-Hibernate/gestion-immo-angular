import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Component } from '@angular/core';

//import FormsModule : pour l'approche Template Driven Form
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
//=========== Composants utilitaires ================//
import { NavbarConseillerComponent } from './navbar-conseiller/navbar-conseiller.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarVitrineComponent } from './navbar-vitrine/navbar-vitrine.component';

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
import { SaveBienAchatComponent } from './composants/bienImmobilier-composants/save-bien-achat/save-bien-achat.component';
import { SaveVisiteComponent } from './composants/visite-composants/save-visite/save-visite.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './services/basicAuthHtppInterceptor-service/basic-auth-htpp-interceptor-service.service';









@NgModule({
  declarations: [
    AppComponent,
    NavbarConseillerComponent,
FooterComponent,
NavbarVitrineComponent,
HomeComponent,
InfoVenteLocationComponent,
AboutUsComponent,
InfosContactComponent,
ListeBienImmobiliersComponent,
AffichageBienVitrineComponent,
AffichageBienConseillerComponent,
ListeBiensImmobilierListeConseillerComponent,
SaveBienALouerComponent,
ListeClientComponent,
AffichageClientComponent,
ListeVisiteComponent,
ListeContratComponent,
ListeProprietaireComponent,
AffichageProprietaireComponent,
AjouterProprietaireComponent,
ListeConseillerComponent,
AffichageConseillerComponent,
SaveBienAchatComponent,
SaveVisiteComponent,
LoginComponent,
LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
