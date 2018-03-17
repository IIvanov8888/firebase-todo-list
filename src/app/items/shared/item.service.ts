import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Item } from './item.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  private basePath = '/items';

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;


  constructor(private readonly db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>('items');
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
  }

  // Return an observable list of Items
  getItemsList(): Observable<Item[]> {
    return this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  // Create a brand new item
  createItem(title: string, body: string): void {
    // Persist a document id
    const id = this.db.createId();
    const item: Item = { id, title, body: body };
    this.itemsCollection.add(item);
  }

  // Update an exisiting item
  updateItem(item: Item): void {
    this.itemsCollection.doc(item.id).update({ title: !item.title });
  }

  // Deletes a single item
  deleteItem(item: Item): void {
    this.itemsCollection.doc(item.id).delete();
  }

  /**
   * @author Ivelin Ivanov
   */
  deleteAll(): void {
    this.itemsCollection.doc(null).delete();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}
