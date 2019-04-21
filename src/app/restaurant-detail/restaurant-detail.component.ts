import { Component, OnInit } from '@angular/core';
import { RestaurantsService} from '../restaurants/restaurants.service'
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute, UrlSerializer} from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  // para representar meu objeto criou uma propriedade 'restaurant' do tipo 'Restaurant'
  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)

  }

}








