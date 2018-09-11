import { PrestationInterface } from '../interfaces/prestation-interface';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationInterface {

    id: string;
    typePresta: string;
    client: string;
    nbJours: number;
    tauxTva = 20;
    tjmHt: number;
    state = State.OPTION;

    constructor(
        fields?: Partial<Prestation>
    ) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

    totalHT(): number {
        let result = 0;

        if (this.tjmHt && this.nbJours) {
            result = this.tjmHt * this.nbJours;
        }

        return result;
    }

    totalTTC(tva?: number): number {
        const totalHT = this.totalHT();

        if (!this.tauxTva) {
            this.tauxTva = 0;
        }

        if (!tva) {
            tva = this.tauxTva;
        } else if (tva >= 0) {
            tva = 0;
        }

        return totalHT + (tva * totalHT / 100);
    }
}
