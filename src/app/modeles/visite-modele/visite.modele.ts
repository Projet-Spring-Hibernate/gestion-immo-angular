import { BienImmobilier } from '../bienImmobilier-modele/bienImmobilier.modele';
import { Client } from '../client-modele/client.modele';
import { Conseiller } from '../conseiller-modele/conseiller.modele';

export class Visite{
    idVisite:number;
    dateDeVisite:string;
    heureDeVisite:string;
    bienImmobilier:BienImmobilier;
    client:Client;
    conseiller:Conseiller;
}