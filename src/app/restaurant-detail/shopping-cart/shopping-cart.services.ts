import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
    items: CartItem[] = []

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

    }

    total(): number {
        // map = substitui o item pelo valor daquele item !?
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}
