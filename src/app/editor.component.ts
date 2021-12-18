import { Component } from '@angular/core';
import { SimpleService } from './Service';


class Item {
  name: string;
  date: string;
  constructor(name: string, date: string) {
    this.name = name;
    this.date = date;
  }
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./app.component.scss']
})

export class EditorComponent {

  text: string = "";
  items: Item[] =
    [
    ];

  constructor(
    private service: SimpleService
  ) { }

  ngOnInit() {
    this.items = this.service.getItems();
  }

  addItem(name: string) {
    if (name == null || name.trim() == "")
      return;
    let item = new Item(name, new Date().toLocaleString())
    this.service.addItem(item);
  }



  copyItem(item: Item): void {
    let item_copy = new Item(item.name, new Date().toLocaleString())
    this.service.addItem(item_copy);
  }

  deleteItem(i: number): void {
    this.service.deleteItem(i);
  }

  SortName(): void {
    this.service.SortName();
  }

  SortDate(): void {
    this.service.SortDate();
  }

}
