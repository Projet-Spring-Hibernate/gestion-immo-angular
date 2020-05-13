import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Import de l'objet Observable
import {Observable, Subject} from 'rxjs'
import { Proprietaire } from 'src/app/modeles/proprietaire-modele/proprietaire.modele';
// import des opérateurs
import {tap, filter, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  constructor(private httpClient : HttpClient) { }

  //prop : l'url du web service REST
  private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/proprietaire/get-all"
  private URL_WSREST_BASE_URL = "http://localhost:8080/spring-rest/proprietaire"


  private _refreshNeeded = new Subject<void>();
  /**
   * Getter
   */
  public get refreshNeeded() {
    return this._refreshNeeded;
  }
  /*================ METHODES ========================== */
  getAllProprietaire() : Observable<Proprietaire[]>{
    // envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<Proprietaire[]>(this.URL_WSREST_GETALL)
  }//end getAllProprietaire

  /**
   * AJOUT
   * @param proprietaire 
   */
  ajouterProprietaire(proprietaire :Proprietaire) :Observable<Proprietaire> {

    return this.httpClient.post<Proprietaire>(`${this.URL_WSREST_BASE_URL}/save`, proprietaire).pipe(

      tap(
        () => {this.refreshNeeded.next()}
      )
    )
  }//end ajouterProprietaire

  findProprietaireById(id :number):Observable<Proprietaire>  {

    // invocation du ws rest avec une req http get
    return this.httpClient.get<Proprietaire>(`${this.URL_WSREST_BASE_URL}/${id}`).pipe(
      tap(
        // next() émet un événement pour les composants qui vont s'abnner à l'observable pour les informer de l'ajout d'un propriétaire
        () => {this.refreshNeeded.next()}
      )
    );
  }//end findProprietaireById

  /**
   * MODIF
   * @param proprietaire 
   */
  modifierProprietaire(proprietaire :Proprietaire) :Observable<void> {

    return this.httpClient.put<void>(`${this.URL_WSREST_BASE_URL}/save/${proprietaire.id}`, proprietaire).pipe(

      tap(
        () => {this.refreshNeeded.next()}
      )
    )
  }//end modifierProprietaire

  /**
   * Permet de supp un proprio via le ws rest
   * @param proprietaire 
   */
  supprimerProprietaire(proprietaire : Proprietaire): Observable<void>{

    //envoi d'une requête http en DELETE vers le ws rest

    // construction de l'url avec la template string de typescript
    return this.httpClient.delete<void>(`${this.URL_WSREST_BASE_URL}/delete/${proprietaire.id}`).pipe(
      tap(
        // next() émet un événement pour les composants qui vont s'abnner à l'observable pour les informer de l'ajout d'un employé
        () => {this.refreshNeeded.next()}
      )
    );
  }//end supprimerProprietaire(employe)


}
