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

  getAllClientFromWsRest() : Observable<Client[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<Client[]>(this.URL_WSREST_GETALL)
  }//end 


}
