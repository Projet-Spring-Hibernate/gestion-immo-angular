import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import du modele de données bienImmobilier.ts
import { BienImmobilier } from '../../modeles/bienImmobilier-modele/bienImmobilier.modele'
import { BienAAcheter } from '../../modeles/bienAAcheter-modele/bienAAcheter.modele'
import { BienALouer } from '../../modeles/bienALouer-modele/bienALouer.modele'
import {TypeBien} from '../../modeles/typeBien-modele/typeBien.modele'
//Import de l'objet Observable
import {Observable} from 'rxjs'
import {} from 'rxjs/add/operator/toPromise';

@Injectable({
    //permet de declarer le service comme provider de maniere transverse
  providedIn: 'root'
})


export class BienImmobilierService {

  /**
   * constructeur du service 
   * -> injection du module HttpClient comme dependance
   */
  //constructor() {  }
  constructor(private httpClient : HttpClient) {  }
  
  //prop : l'url du web service REST
   private URL_WSREST_GETALL = "http://localhost:8080/spring-rest/bienImmobilier/get-all"
   private URL_WSREST_GETALLAACHETER = "http://localhost:8080/spring-rest/bienAAcheter/get-all"
   private URL_WSREST_GETALLALOUER = "http://localhost:8080/spring-rest/bienALouer/get-all"
   private URL_WSREST_GETBYID = "http://localhost:8080/spring-rest/bienImmobilier/get-by-id"
   private URL_WSREST_GETTYPEBYID = "http://localhost:8080/spring-rest/bienImmobilier/get-type-by-id"
   private URL_WSREST_GETBYID_LOC = "http://localhost:8080/spring-rest/bienALouer/get-by-id"
   private URL_WSREST_GETBYID_ACHAT = "http://localhost:8080/spring-rest/bienAAcheter/get-by-id"
   private URL_WSREST_SAVE_LOC = "http://localhost:8080/spring-rest/bienALouer/save"
   private URL_WSREST_SAVE_ACHAT = "http://localhost:8080/spring-rest/bienAAcheter/save"
   private URL_WSREST_DELETE ="http://localhost:8080/spring-rest/bienImmobilier/delete"

   /**
    * Recup de tous les biens immobiliers de la bdd via le ws
    */
  getAllBienImmobiliersFromWsRest() : Observable<BienImmobilier[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<BienImmobilier[]>(this.URL_WSREST_GETALL)
  }//end 

   /**
    * Recup des biens immobiliers à acheter de la bdd via le ws
    */
  getAllBienImmobiliersAAcheterFromWsRest() : Observable<BienAAcheter[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<BienAAcheter[]>(this.URL_WSREST_GETALLAACHETER)
  }//end 
  
  /**
   * Recup des biens immobiliers à louer de la bdd via le ws
   */
  getAllBienImmobiliersALouerFromWsRest() : Observable<BienALouer[]>{
    //1. envoi d'une requete en GET via la méthode get() qui retourne un type generique 'Observable<Object>'
    return this.httpClient.get<BienALouer[]>(this.URL_WSREST_GETALLALOUER)
  }//end 

   /**
   * recup d'un bien via son id du ws rest
   */
  findBienById(idBien : number){
    return this.httpClient.get<BienImmobilier>(`${this.URL_WSREST_GETBYID}/${idBien}`);
  }//end 

   /**
   * recup d'un bien à louer via son id du ws rest
   */
  findBienALouerById(idBien : number){
    return this.httpClient.get<BienALouer>(`${this.URL_WSREST_GETBYID_LOC}/${idBien}`);
  }//end 


     /**
   * recup d'un bien à louer via son id du ws rest
   */
  findBienAAcheterById(idBien : number){
    return this.httpClient.get<BienAAcheter>(`${this.URL_WSREST_GETBYID_ACHAT}/${idBien}`);
  }//end 


findTypeBienById(idBien : number): Observable<TypeBien>{

  console.log(this.httpClient.get<TypeBien>(`${this.URL_WSREST_GETTYPEBYID}/${idBien}`))
  return this.httpClient.get<TypeBien>(`${this.URL_WSREST_GETTYPEBYID}/${idBien}`);
}//end 

   /**
   * ajoute ou crée un bien à louer
   */
  saveBienALouer(bien:BienALouer): Observable<BienALouer>{
    return this.httpClient.post<BienALouer>(this.URL_WSREST_SAVE_LOC,bien);
  }//end 

  /**
   * ajoute ou crée un bien à acheter
   */
  saveBienAAchat(bien:BienAAcheter): Observable<BienAAcheter>{
    return this.httpClient.post<BienAAcheter>(this.URL_WSREST_SAVE_ACHAT,bien);
  }//end 


  deleteBien(id:number){
    return this.httpClient.delete<void>(`${this.URL_WSREST_DELETE}/${id}`);
  }
}//End class
