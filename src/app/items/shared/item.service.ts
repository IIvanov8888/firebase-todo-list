import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Item } from './item.model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewItem {
  title: string;
  body: 0;
  time: Date;
}

@Injectable()
export class ItemService {

  notesCollection: AngularFirestoreCollection<Item>;
  noteDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.notesCollection = this.afs.collection('items', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Item[]> {
    return this.notesCollection.valueChanges();
  }

  getSnapshot(): Observable<Item[]> {
    // ['added', 'modified', 'removed']
    return this.notesCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Item;
        return { id: a.payload.doc.id, title: data.title, body: data.body };
      });
    });
  }

  getNote(id: string) {
    return this.afs.doc<Item>(`items/${id}`);
  }

  create(content: string) {
    const item = {
      title: content,
      body: content,
      time: new Date()
    };
    return this.notesCollection.add(item);
  }

  updateNote(id: string, data: Partial<Item>) {
    return this.getNote(id).update(data);
  }

  deleteNote(id: string) {
    return this.getNote(id).delete();
  }
}
