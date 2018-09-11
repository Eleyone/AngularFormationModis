import { State } from '../enums/state.enum';

export interface PrestationInterface {
    id: string;
    typePresta: string;
    client: string;
    nbJours: number;
    tauxTva: number;
    tjmHt: number;
    state: State;
}
