import { BienImmobilier } from '../bienImmobilier-modele/bienImmobilier.modele';
import { Client } from '../client-modele/client.modele';
import { Conseiller } from '../conseiller-modele/conseiller.modele';

export class Contrat{
    idContrat:number;
    prix:number;
    date:string;
    numeroRef:string;
    bienImmobilier:BienImmobilier;
    client:Client;
    conseiller:Conseiller;
}