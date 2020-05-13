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
  getAllVisiteFromWsRest() : Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(this.URL_WSREST_GETALL)
  }
}
