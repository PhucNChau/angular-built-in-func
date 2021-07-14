import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ng-for',
  templateUrl: './ex-ng-for.component.html',
  styleUrls: ['./ex-ng-for.component.css']
})
export class ExNgForComponent implements OnInit {
  cities: string[];
  people = [
    { name: 'Anderson', age: 35, city: 'Sao Paolo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
  ];
  peopleByCity = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 }
      ]
    },
    {
      city: 'Sao Paolo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age: 36 }
      ]
    }
  ];
  constructor() {
    this.cities = ['Miami', 'Sao Paolo', 'New York'];
  }

  ngOnInit(): void {
  }

}
