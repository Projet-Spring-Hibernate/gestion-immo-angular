import { Adresse } from '../adresse-modele/adresse.modele';
import {Contrat } from '../contrat-modele/contrat.modele'
import { Visite } from '../visite-modele/visite.modele';
export class Conseiller{
    motDePasse:string;
    email:string;
    id:number;
    nom:string;
    telephonePerso:string;
    telephonePro:string;
    adresse:Adresse;
    contrats:Contrat[];
    visites : Visite[];
}