import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';


interface Item{
  imageSrc:string;


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialogService: DialogService){}
  data:Item[] = [
    {
      imageSrc:'../../assets/de.jpg'
    },
    {
      imageSrc:'../../assets/sjn.jpeg'
    }
  ];
  title = 'test';
}
