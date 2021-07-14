import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ng-style',
  templateUrl: './ex-ng-style.component.html',
  styleUrls: ['./ex-ng-style.component.css']
})
export class ExNgStyleComponent implements OnInit {
  color: string;
  fontSize: string;
  constructor() {
    this.color = 'black';
    this.fontSize = '18';
  }

  ngOnInit(): void {
  }

  apply(color: string, fontSize: string): void {
    this.color = color;
    this.fontSize = fontSize;
  }
}
