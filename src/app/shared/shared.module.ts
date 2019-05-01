import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from 'app/order/order.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.services';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { LoggedInGuard } from 'app/security/loggedin.guard';
import { LoginService } from '../security/login/login.service';
import { InputComponent } from './input/input.component';
import { NotificationService } from './messages/notification.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { LeaveOrderGuard } from '../order/leave-order.guard';




@NgModule ({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, RatingComponent, FormsModule, ReactiveFormsModule, CommonModule, SnackbarComponent]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, 
                        OrderService, 
                        RestaurantsService, 
                        NotificationService, 
                        LoggedInGuard,                        
                        LoginService,
                        LeaveOrderGuard]
        }
    }
}
