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

//Компонент- то,что отображается на экране,без @Component класс компонентом не считается
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


//Класс компонента-export используется  для передачи класса в другие модули
export class AppComponent {
}
