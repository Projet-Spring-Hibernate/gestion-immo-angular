import { Adresse } from '../adresse-modele/adresse.modele';
import { BienImmobilier } from '../bienImmobilier-modele/bienImmobilier.modele';
export class Proprietaire{
    id:number;
    nom:string;
    telephonePerso:string;
    telephonePro:string;
    adresse:Adresse;
    listeBienImmobiliers : BienImmobilier[];
    
}