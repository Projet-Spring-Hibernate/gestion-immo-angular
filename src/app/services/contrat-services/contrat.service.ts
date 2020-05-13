import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrat } from 'src/app/modeles/contrat-modele/contrat.modele';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private httpClient:HttpClient) { }
  private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/contrat/get-all"
  getAllContratFromWsRest() : Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(this.URL_WSREST_GETALL)
  }

}
