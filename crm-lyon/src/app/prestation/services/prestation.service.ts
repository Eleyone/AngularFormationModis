import { Injectable } from '@angular/core';

import { Prestation } from '../../shared/models/prestation';
import { State } from '../../shared/enums/state.enum';

import { fakeCollection } from './prestations_fake';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }
  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get presta by id

  // add presta

  // update presta
  public update(presta: Prestation, state?: State): void {
    const updatedPresta = {...presta};
    updatedPresta.state = state;
    // appel API

    // to remove with DB
    presta.state = state;
  }

  // delete presta
}
