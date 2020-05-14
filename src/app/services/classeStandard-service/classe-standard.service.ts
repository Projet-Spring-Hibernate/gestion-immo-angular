import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClasseStandard} from '../../modeles/classeStandard-modele/classeStandard.modele'
import {Observable} from 'rxjs'
import {} from 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ClasseStandardService {


  /**
   * constructeur du service 
   * -> injection du module HttpClient comme dependance
   */
  constructor(private httpClient : HttpClient) {  }

  //prop : l'url du web service REST
  private URL_WSREST_GETALL = " http://localhost:8080/spring-rest/classeStandard/get-all"
 

     /**
    * Recup de toutes les classes standards de la bdd via le ws
    */
   getAllBienImmobiliersFromWsRest() : Observable<ClasseStandard[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<ClasseStandard[]>(this.URL_WSREST_GETALL)
  }//end 
}
