import { Prestation } from '../../shared/models/prestation';
import { State } from '../../shared/enums/state.enum';

export const fakeCollection: Prestation[] = [
    new Prestation({
        id: 'a',
        typePresta: 'formation',
        client: 'Arkesys',
        nbJours: 110,
        tauxTva: 5.5,
        tjmHt : 600,
    }),
   new Prestation({
        id: 'b',
        typePresta: 'prestation',
        client: 'Modis',
        nbJours: 20,
        tjmHt : 800,
        state: State.CONFIRMED
    })
];
