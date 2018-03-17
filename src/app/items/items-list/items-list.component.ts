import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../shared/item.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  showSpinner = true;
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  /*constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList();
  }
  */

  ngOnInit() {
  }
}
