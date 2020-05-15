import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Conseiller} from '../../modeles/conseiller-modele/conseiller.modele'
import {Contrat} from '../../modeles/contrat-modele/contrat.modele'
import {Observable,Subject} from 'rxjs'
import {tap, filter, map} from 'rxjs/operators';
import {Visite} from '../../modeles/visite-modele/visite.modele'

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  private _refreshNeeded = new Subject<void>();
  
  public get refreshNeeded() {
    return this._refreshNeeded;
  }
 

  constructor(private httpClient : HttpClient) { }
  private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/conseiller/get-all"
  private URL_WSREST_GETALLBYConTrat = "http://localhost:8080/spring-rest/contrat/get-by-idconseiller"
  private URL_WSREST_GETALLBYVISITE = "http://localhost:8080/spring-rest/visite/get-by-idconseiller"

  private URL_WSREST_SAVE = " http://localhost:8080/spring-rest/conseiller/save"

  private URL_WSREST_GETALLBYID= "http://localhost:8080/spring-rest/conseiller/get-by-id"
  private URL_WSREST_DELETE = "http://localhost:8080/spring-rest/conseiller/delete"

  getAllConseillerFromWsRest() : Observable<Conseiller[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<Conseiller[]>(this.URL_WSREST_GETALL);
  }//end 

  getAllConseillerbyContratFromWsRest(id : number): Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(`${this.URL_WSREST_GETALLBYConTrat}/${id}`);
  }

  getAllVisitebyConseillerFromWsRest(id : number): Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(`${this.URL_WSREST_GETALLBYVISITE}/${id}`);
  }

  getById(idConseiller : number){
    return this.httpClient.get<Conseiller>(`${this.URL_WSREST_GETALLBYID}/${idConseiller}`);
  }

  saveConseiller(conseiller:Conseiller): Observable<Conseiller>{
    return this.httpClient.post<Conseiller>(this.URL_WSREST_SAVE,conseiller);
  }//end 


  deleteConseiller(id:number){
    return this.httpClient.delete<void>(`${this.URL_WSREST_DELETE}/${id}`);
  }

}
