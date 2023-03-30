import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/core/models/restaurant.interface';
import { JsonService } from 'src/core/services/json.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private responsive: BreakpointObserver, private jsonService: JsonService) { }

  restaurants: Restaurant[] = [];

  colCount: number = 1;

  ngOnInit() {
    this.calculateCols();
    this.jsonService.getRestaurantsWithDefaults().subscribe(
      restaurants => {
        this.restaurants = restaurants;
        },
    );
  }

  private calculateCols() {
    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      const breakpoints = result.breakpoints;

      if (breakpoints[Breakpoints.XSmall]) {
        this.colCount = 1;
      } else if (breakpoints[Breakpoints.Small]) {
        this.colCount = 3;
      } else if (breakpoints[Breakpoints.Medium]) {
        this.colCount = 4;
      } else if (breakpoints[Breakpoints.Large]) {
        this.colCount = 5;
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
