import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/core/models/restaurant.interface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) { }

  restaurants: Restaurant[] = [
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000),
    new RestaurantImpl('El Olivo', 'C. Barquete, 23A, 41400 Écija, Sevilla', 'https://www.reddit.com/', 600000000)
  ];

  colCount: number = 1;

  ngOnInit() {
    this.calculateCols();
  }

  private calculateCols() {
    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.XSmall]) {
          this.colCount = 1;
          console.log("screens matches XSmall" + this.colCount);
        } else if (breakpoints[Breakpoints.Small]) {
          this.colCount = 3;
          console.log("screens matches Small" + this.colCount);
        } else if (breakpoints[Breakpoints.Medium]) {
          this.colCount = 4;
          console.log("screens matches Medium" + this.colCount);
        } else if (breakpoints[Breakpoints.Large]) {
          this.colCount = 5;
          console.log("screens matches Large" + this.colCount);
        }
      });
  }
}

class RestaurantImpl implements Restaurant {
  name: string;
  address: string;
  image?: string = 'assets/images/spaghetti-carbonara.jpg';
  url: string;
  tel: number;
 
  constructor(name: string, address: string, url: string, tel: number){
    this.name = name;
    this.address = address;
    this.url = url;
    this.tel = tel;
  }
}
