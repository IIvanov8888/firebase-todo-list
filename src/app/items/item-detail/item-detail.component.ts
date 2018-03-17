import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-detail',
  providers: [ItemService],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  @Input() item: Item;

  constructor(private itemSvc: ItemService) { }

  updateTimeStamp() {
    const date = new Date().getTime();
    // this.itemSvc.updateItem(this.item.$key, { timeStamp: date });
  }

  updateActive(value: boolean) {
    // this.itemSvc.updateItem(this.item.$key, { active: value });
  }

  deleteItem() {
    // this.itemSvc.deleteItem(this.item.$key);
  }
}
