import { Proprietaire } from '../proprietaire-modele/proprietaire.modele';
import { ClasseStandard } from '../classeStandard-modele/classeStandard.modele';
import { Adresse } from '../adresse-modele/adresse.modele';
export class BienALouer{
    idBien:number;
    statut:string;
    dateSoumissionAgence:string;
    revenuCadastral:string;
    dateMiseADisposition:string;
    photo:string;
    typeBien:string;
    utilisation:string;
    superficie:number;
    proprietaire:Proprietaire;
    classeStandard:ClasseStandard;
    adresse:Adresse;
    caution:number;
    loyer:number;
    charges:number;
    typeBail:string;
    garniture:string;
}