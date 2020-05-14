import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Client} from '../../modeles/client-modele/client.modele'

import {Observable} from 'rxjs'
import { ClasseStandard } from 'src/app/modeles/classeStandard-modele/classeStandard.modele';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient : HttpClient) { }
  private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/client/get-all"
  private URL_WSREST_GETBYID = "http://localhost:8080/spring-rest/client/get-by-id"
  private URL_WSREST_SAVE = "http://localhost:8080/spring-rest/client/save"
  private URL_WSREST_DELETE= "http://localhost:8080/spring-rest/client/delete"

  getAllClientFromWsRest() : Observable<Client[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<Client[]>(this.URL_WSREST_GETALL)
  }//end 

  getByIdClientFromWsRest(id:number){
    return this.httpClient.get<Client>(`${this.URL_WSREST_GETBYID}/${id}`)
  }

  saveClientWithWsRest(client:Client){
    return this.httpClient.post<Client>(this.URL_WSREST_SAVE, client)
  }

  deleteClientWithWsRest(id:number){
    return this.httpClient.delete<void>(`${this.URL_WSREST_DELETE}/${id}`)
  }

}
