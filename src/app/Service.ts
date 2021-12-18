import { Injectable } from '@angular/core';


class Item {
    name: string;
    date: string;
    constructor(name: string, date: string) {
        this.name = name;
        this.date = date;
    }
}

@Injectable({ providedIn: 'root' })
export class SimpleService {

    private items$: Item[] = [];

    addItem(item: Item): void {
        this.items$.push(item)
    }

    getItems(): Item[] {
        return this.items$;
    }

    deleteItem(i: number): void {
        this.items$.splice(i, 1);
    }

    swapItem(first: number, last: number) {
        [this.items$[first], this.items$[last]] = [this.items$[last], this.items$[first]];
    }

    SortName() {
        this.items$.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    }

    SortDate() {
        this.items$.sort((a, b) => a.date > b.date ? 1 : a.date < b.date ? -1 : 0);
    }
}

