import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Visite } from 'src/app/modeles/visite-modele/visite.modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  constructor(private httpClient:HttpClient) { }


  private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/visite/get-all"
  private URL_WSREST_GET_BY_ID = "http://localhost:8080/spring-rest/visite/get-by-id"
  private URL_WSREST_SAVE ="http://localhost:8080/spring-rest/visite/save"
  private URL_WSREST_DELETE ="http://localhost:8080/spring-rest/visite/delete"

  getAllVisiteFromWsRest() : Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(this.URL_WSREST_GETALL)
  }

  getByIdVisiteFromWsRest(id:number){
    return this.httpClient.get<Visite>(`${this.URL_WSREST_GET_BY_ID}/${id}`)
  }

  saveVisiteWithWsRest(visite:Visite){
    return this.httpClient.post<Visite>(this.URL_WSREST_SAVE, visite)
  }

  deleteVisiteWithWsRest(id:number){
    return this.httpClient.delete<void>(`${this.URL_WSREST_DELETE}/${id}`)
  }

}
