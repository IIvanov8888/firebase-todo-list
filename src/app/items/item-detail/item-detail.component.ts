import { Component, Input } from '@angular/core';

import { ItemService } from '../shared/item.service';

import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {

  @Input()
  item: Item;

  constructor(private noteService: ItemService) { }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
  }

}
