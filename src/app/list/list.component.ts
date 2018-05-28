import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  picture: string;

  constructor() { }

  ngOnInit() {
  }

  showPicture(pictureNumber: number) {
    return pictureNumber === 1 ? this.picture = '1.jpg' : this.picture = '2.jpg';
  }

}
