import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent} from './order.component'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivated(orderComponent: OrderComponent, 
                   activatedRoute: ActivatedRouteSnapshot,
                   routerState: RouterStateSnapshot): boolean {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra em andamento?')
        }else{
            return true
        }
    }
}