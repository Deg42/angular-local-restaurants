import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('assets/restaurant.data.json');
  }

  getRestaurantsWithDefaults(): Observable<Restaurant[]> {
    return this.getRestaurants()
      .pipe(
        map((restaurants: Restaurant[]) => this.assignDefaultsToRestaurants(restaurants))
      );
  }

  private assignDefaults(restaurant: Restaurant): Restaurant {
    return {
      ...restaurant,
      image: restaurant.image ?? 'assets/images/spaghetti-carbonara.jpg',
    };
  }

  private assignDefaultsToRestaurants(restaurants: Restaurant[]): Restaurant[] {
    return restaurants.map((restaurant: Restaurant) => this.assignDefaults(restaurant));
  } 
}