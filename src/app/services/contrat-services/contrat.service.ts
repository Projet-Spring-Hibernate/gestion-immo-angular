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
  private URL_WSREST_GET_BY_ID = "http://localhost:8080/spring-rest/contrat/get-by-id"
  private URL_WSREST_SAVE = "http://localhost:8080/spring-rest/contrat/save"
  private URL_WSREST_DELETE = "http://localhost:8080/spring-rest/contrat/delete"
  getAllContratFromWsRest() : Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(this.URL_WSREST_GETALL)
  }
  getByIdContratFromWsRest(id:number){
    return this.httpClient.get<Contrat>(`${this.URL_WSREST_GET_BY_ID}/${id}`)
  }
  saveContratWithWsRest(contrat:Contrat){
    return this.httpClient.post<Contrat>(this.URL_WSREST_SAVE, contrat)
  }
  deleteContratWithWsRest(id:number){
    return this.httpClient.delete<void>(`${this.URL_WSREST_DELETE}/${id}`)
  }

}

