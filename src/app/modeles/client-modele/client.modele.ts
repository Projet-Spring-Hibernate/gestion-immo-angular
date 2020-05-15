import { Adresse } from '../adresse-modele/adresse.modele';
import { Contrat } from '../contrat-modele/contrat.modele';
import { Visite } from '../visite-modele/visite.modele';
import { ClasseStandard } from '../classeStandard-modele/classeStandard.modele';


export class Client{
    id:number;
    nom:string;
    telephonePerso:string;
    telephonePro:string;
    adresse:Adresse;
    listeClasseStandard:ClasseStandard[];
    listeContrats:Contrat[];
    listeVisites:Visite[]
}