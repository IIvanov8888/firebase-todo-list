import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';

import { Item } from '../shared/item.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {

  items: Observable<Item[]>;
  content: string;

  constructor(private noteService: ItemService) { }

  ngOnInit() {
    this.items = this.noteService.getData();
    // this.items = this.noteService.getSnapshot();
  }

  createNote() {
    this.noteService.create(this.content);
    this.content = '';
  }

}
