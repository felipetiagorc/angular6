import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Restaurant} from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

   constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
           .map(response => response.json())
           .catch(ErrorHandler.handleError)
    }

// cria o método restaurantById, parâmetro id:string e cria um Observable que vai ser um restaurante só
    restaurantById(id: string): Observable<Restaurant>{
        // retorna o get + (`caminho da API`)/restaurants/+ URL concatenado com a ID:
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant (id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}