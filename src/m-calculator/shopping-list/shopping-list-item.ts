import { Product } from "../product/product";


export class ShoppingListItem {
    private product: Product;
    private quantity: number;

    constructor(product: Product, quantity: number){
        this.product = product;
        this.quantity = quantity;
    }

    getShoppingListItemPrice(): number {
        return this.product.getProductPrice() * this.quantity;
    }

}