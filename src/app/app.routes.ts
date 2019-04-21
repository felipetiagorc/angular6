import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AboutComponent } from './about/about.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderComponent } from './order/order.component';



export const ROUTES: Routes = [

{ path: '', component: HomeComponent},
{ path: 'restaurants', component: RestaurantsComponent },
{ path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
        // quando eu não digitar nada depois de /restaurants/:id, eu vou redirecionar para: 'menu',
        // pathMatch: 'full' significa: o caminho é exatamente esse.
        { path: '', redirectTo: 'menu', pathMatch: 'full'},
        { path: 'menu', component: MenuComponent},
        { path: 'reviews', component: ReviewsComponent}
]},

{ path: 'about', component: AboutComponent },
{ path: 'order', component: OrderComponent }


]