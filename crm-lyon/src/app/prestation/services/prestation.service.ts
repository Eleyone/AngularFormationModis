import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Prestation } from '../../shared/models/prestation';
import { State } from '../../shared/enums/state.enum';

// import { fakeCollection } from './prestations_fake';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection$: Observable<Prestation[]>;
  private _dbCollection: AngularFirestoreCollection<Prestation>;
  public message$: Subject<string> = new Subject<string>();

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) {
    /**
     * Angular Firebase methode
     */
    this._dbCollection = db.collection<Prestation>('prestation');
    this.collection$ = this._dbCollection.valueChanges().pipe(
      map((data) => {
        const tab = [];
        data.forEach((item) => {
          tab.push(new Prestation(item));
        });
        return tab;
      })
    );

   /**
    * HttpClient Méthode
    */
   // this.collection$ = this.http.get('api/endpoint');
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // get presta by id
  public get(id: string): Observable<Prestation> {
    return this._dbCollection.doc<Prestation>(id).valueChanges();
  }

  // add presta
  public add(presta: Prestation): Promise<any> {
    const newPresta = { ...presta };
    newPresta.id = this.db.createId();
    return this._dbCollection.doc(newPresta.id).set(newPresta);

    /*
    Doit obligatoirement etre 'subscribe' pour lancer la requete HTTP
    return this.http.post('api/endpoint', newPresta);
    */
  }

  // update presta
  public updateState(presta: Prestation, state?: State): Promise<any> {
    const updatedPresta = { ...presta };
    if (state) {
      updatedPresta.state = state;
    }
    return this._dbCollection.doc(updatedPresta.id).update(updatedPresta);
  }

  // update presta
  public update(presta: Prestation): Promise<any> {
    const updatedPresta = { ...presta };
    return this._dbCollection.doc(updatedPresta.id).update(updatedPresta);
  }

  // delete presta
  public delete(prestaId: string): Promise<any> {
    return this._dbCollection.doc(prestaId).delete();
  }
}
