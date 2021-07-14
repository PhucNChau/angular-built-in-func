import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ng-class',
  templateUrl: './ex-ng-class.component.html',
  styleUrls: ['./ex-ng-class.component.css']
})
export class ExNgClassComponent implements OnInit {
  isBordered: boolean;
  classesObj: object;
  classList: string[];

  constructor() { }

  ngOnInit(): void {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    };
  }
}
