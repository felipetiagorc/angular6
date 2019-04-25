import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';

@ Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(private notificationService: NotificationService) {}

    clear() {
        this.items = []

    }

    // adiciona um item do menuItem no carrinho
    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name} ao carrinho!`)

    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

    // remove um item do carrinho
    removeItem(item: CartItem) {
        // splice (indice_a_remover, e a quantidade.. e eu quero remover 1 ) nao entendi direito
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name} do carrinho!`)

    }

    total(): number {
        // map = substitui o item pelo valor daquele item !?
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}
