import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//Import de l'objet Observable
import {Observable} from 'rxjs'
import {} from 'rxjs/add/operator/toPromise';

import {Adresse} from '../../modeles/adresse-modele/adresse.modele'

@Injectable({
  providedIn: 'root'
})
export class AdresseServiceService {

    /**
   * constructeur du service 
   * -> injection du module HttpClient comme dependance
   */
  //constructor() {  }
  constructor(private httpClient : HttpClient) {  }
   //prop : l'url du web service REST
   private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/adresse/get-all"
   private URL_WSREST_GETBYID = "http://localhost:8080/spring-rest/adresse/get-by-id"
   private URL_WSREST_SAVE = "http://localhost:8080/spring-rest/adresse/save"


   getAllAdresseFromWsRest() : Observable<Adresse[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
       return this.httpClient.get<Adresse[]>(this.URL_WSREST_GETALL)
     }//end 

     getByIdAdresseFromWsRest(idBien : number){
      return this.httpClient.get<Adresse>(`${this.URL_WSREST_GETBYID}/${idBien}`);
    }//end 

    saveAdresseWithWebService(adresse:Adresse): Observable<Adresse>{
      return this.httpClient.post<Adresse>(this.URL_WSREST_SAVE,adresse);
    }//end 
    }
